import React, {
  useState,
  useContext,
  // useEffect
} from 'react';
import { UserContext, SocketContext } from '../../../context/contexts';
import Container from '../../shared/Container';
import Button from '../../ui-elements/Button';
import { useGame } from '../../../hooks/game-hook';
import '../../../styles/info.css';

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

  const HideLobbyIdButton = () => (
    <Button
      className='hide-lobbyid'
      onClick={hideLobbyIdHandler}
    >
    {lobbyIdHidden ? 'SHOW LOBBY-ID' : 'HIDE LOBBY-ID'}
    </Button>
  );

  const lobbyId = myLobby === 'z' ? 'splendid-monolith-3289' : myLobby;

  // const url = () => {
  //   return process.env.NODE_ENV === 'development'
  //     ? `mhkgame.com/lobby/${lobbyId}`
  //     : `${(process.env.REACT_APP_FRONTEND_URL).slice(9)}/lobby/${lobbyId}`;
  // };

  const showGameStage = stage && stage.id;
  const showClearBtn = iAmLeader;
  const showRoundBtn = iAmLeader
                    && stage
                    && (stage.id === 'round-1' || stage.id === 'round-2');

  if (!gameOn) return (
    <Container className="info nogame">
      <HideLobbyIdButton />
      {!lobbyIdHidden && <>
        <div className='info-lobbyid'>
          {lobbyId}
        </div>
        <button
          className='info-lobbyurl'
          onClick={() => textToClipboard(`mhk-front.herokuapp.com/${lobbyId}`)}
        >
          {`mhk-front.herokuapp.com/${lobbyId}`}
        </button>
      </>}
    </Container>
  );

  return (
    <Container className="info game">
      {showGameStage &&
      <div className='game-stage'>
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
