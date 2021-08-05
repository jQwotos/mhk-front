import React, {
  // useState,
  useContext,
  // useEffect
} from 'react';
import { useParallelSelector } from '../../../../hooks/parallel-selector';
import { useGame } from '../../../../hooks/game-hook';
import { SocketContext } from '../../../../context/contexts';
import Container from '../../../shared/Container';
import Button from '../../../ui-elements/Button';
import Cards from './Cards';

const KillerUI = ({
  thisPlayer: {
    hand,
    role,
    userName,
    canAccuse
  },
  stage,
  keyEv
}) => {

  const { socket } = useContext(SocketContext);

  const types = Object.keys(hand);

  const {
    selTracker,
    minSelected,
    selectHandler,
    submitSelection
  } = useParallelSelector(types);

  const {
    chooseKeyEvHandler
  } = useGame(socket);

  return (
    <Container className={`self self-${role}`} parentGrid='main'>
      <div className='player-info'>
        <li>{userName} ({role[0].toUpperCase()})</li>
        <li className={canAccuse ? 'acc-avail' : 'acc-spent'}>[BADGE]</li>
        {(stage.id === 'Setup') && <Button
          className='confirm-key-evidence'
          onClick={() => submitSelection({cb:[chooseKeyEvHandler], reset:true})}
          disabled={!minSelected}
        >
          Confirm
        </Button>}
      </div>
      {types.map((type) => (
        <Cards
          myRole={role}
          type={`${role}UI`}
          cardType={type}
          key={type}
          stage={stage}
          cards={hand[type]}
          selectedId={selTracker[type]?.id}
          selectCardHandler={selectHandler}
          isMine={true}
          keyEv={keyEv}
        />
      ))}
    </Container>
  );
};

export default KillerUI;

// {(stage.id === 'Setup') && <Button
// className='confirm-key-evidence'
// onClick={() => console.table(selTracker)}
// disabled={false}
// >
// Confirm
// </Button>}