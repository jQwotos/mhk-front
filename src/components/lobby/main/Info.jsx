import React, {
  useState,
  useContext,
  // useEffect
} from 'react';
import { UserContext, SocketContext } from '../../../context/contexts';
import Container from '../../shared/Container';
import Button from '../../ui-elements/Button';
import { useGame } from '../../../hooks/game-hook';
import Tooltip from '../../shared/Tooltip';
import SVGButton from '../../ui-elements/SVGButton';
import '../../../styles/info.css';
import '../../../styles/buttons.css';

const Info = ({
  gameOn,
  stage,
  iAmLeader
}) => {

  const { myLobby, userName } = useContext(UserContext);
  const { socket } = useContext(SocketContext);

  const {
    clearGameHandler,
    nextRoundHandler,
  } = useGame(socket);

  function textToClipboard(text) {
    const dummy = document.createElement('textarea');
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    alert('Lobby URL copied.');
  }

  const [lobbyIdHidden, setLobbyIdHidden] = useState(true);

  const hideLobbyIdHandler = () => setLobbyIdHidden(!lobbyIdHidden);

  const lobbyId = myLobby === 'z' ? 'Splendid-Monolith-7659' : myLobby;

  const showGameStage = stage && stage.id;
  const showClearBtn = iAmLeader;
  const showRoundBtn = iAmLeader
                    && stage
                    && (stage.id === 'round-1' || stage.id === 'round-2');

  if (!gameOn) return (
    <Container className='info nogame'>
      <div className='lobbyid-wrap'>
        <div className='tooltip single right'>
          <SVGButton
            className='hidelobbyid'
            icon={lobbyIdHidden ? 'show' : 'hide'}
            onClick={hideLobbyIdHandler}
            disabled={false}
          />
          <Tooltip tip='hideShowName' />
        </div>
        <div className={`info-lobbyid ${lobbyIdHidden ? 'obscured' : 'visible'}`}>
          {lobbyIdHidden ? 'lobby name hidden' : lobbyId}
          {/* {lobbyIdHidden ? 'lobby name hidden' : <div className='debug'>lobbyId</div>} */}
        </div>
        <div className='tooltip single left'>
          <SVGButton
            className='copyurl'
            icon='copy'
            onClick={() => textToClipboard(`mhk-front.herokuapp.com/${lobbyId}`)}
            disabled={false}
          />
          <Tooltip tip='copyUrl' />
        </div>
      </div>
    </Container>
  );

  return (
    <Container className='info game'>
      {showGameStage &&
      <div className='info-gamestage'>
        {stage.display}
      </div>}
      <div className='game-control-buttons'>
        {showRoundBtn &&
          <Button onClick={nextRoundHandler}>
            NEXT ROUND
          </Button>
        }
        {showClearBtn &&
          <Button onClick={clearGameHandler}>
            CLEAR GAME
          </Button>
        }
      </div>
      <div className='info-lobbyid'>
        {userName}
      </div>
    </Container>
  );
};

export default Info;