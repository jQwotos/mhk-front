import React, {
  // useState,
  useContext,
  // useEffect
} from 'react';
import { useMultiSelector } from '../../../../hooks/multiselector-hook';
import { SocketContext } from '../../../../context/contexts';
import Container from '../../../shared/Container';
import Button from '../../../ui-elements/Button';
import Hand from './Hand';

const Player = ({
  myRole,
  stage,
  hand,
  isGhost,
  isRedTeam,
  playerId,
  accusalSpent,
  keyEv,
  canAccuse,
  canBeTargeted
}) => {

  const { socket } = useContext(SocketContext);

  const confirmTarget = (socket, targetId) => socket.current.emit('secondMurder', targetId);

  const emitAccusation = (accEv, [socket, playerId]) => {
    const accusation = {
      accuserSID: socket.current.id,
      accusedId: playerId,
      accusalEv: accEv
    };
    socket.current.emit('accusation', accusation);
  };

  const {
    selectItemHandler,
    confirmSelection,
    amISelected, amIEnabled,
    minReached, maxReached,
    selTracker
  } = useMultiSelector({items: hand, min: 2, max: 2});

  if (isGhost) return null;

  return (
    <Container className='player'>
      <div className='player-info'>
        <li>{playerId.slice(0,-5)}</li>
        <li className={accusalSpent ? 'acc-spent' : 'acc-avail'}>[BADGE]</li>
        {(myRole === 'witness') && isRedTeam && <li className='red'>!!!</li>}
        {(myRole === 'killer') && isRedTeam && <li className='red'>Accomplice</li>}
        {(myRole === 'accomplice') && isRedTeam && <li className='red'>Killer</li>}
        {(myRole !== 'ghost') && (stage !== 'Setup') && canAccuse &&
        <Button
          className='confirm-accusation'
          onClick={() => confirmSelection({
            cb: [emitAccusation, [socket, playerId]],
            resetTracker: true
          })}
          disabled={!minReached}
        >
          ACCUSE
        </Button>}
        {canAccuse && 
        <Button
          className='confirm-accusation'
          onClick={() => confirmTarget(playerId)}
          disabled={false}
        >
          KILL
        </Button>}
      </div>
      <Hand
        myRole={myRole}
        type={`otherPlayer`}
        stage={stage}
        cards={hand}
        amISelected={amISelected}
        amIEnabled={amIEnabled}
        selectedCards={selTracker}
        selectCardHandler={selectItemHandler}
        maxReached={maxReached}
        canAccuse={canAccuse}
        keyEv={keyEv}
      />
    </Container>
  )
};

export default Player;
