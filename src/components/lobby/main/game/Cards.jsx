import React from 'react';
import Card from './Card';

const Cards = ({
  myRole,
  type,
  cardType,
  stage,
  cards,
  keyEv,
  canIAccuse,
  selectedId,
  selectCardHandler
}) => {

  const rolesWithSimpleHand = ['hunter', 'witness', 'accomplice'];
  const hasSimpleHand = rolesWithSimpleHand.includes(myRole) && (type === 'basicUI');

  if (hasSimpleHand) {
    return (
      <ul className={`c-group ${cardType}`}>
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          className={card.type}
          isHighlighted={false}
          isSelected={false}
          isEnabled={false}
          handleClick={null}
        />
      ))}
    </ul>
    );
  };

  const isEnabled = () => {
    switch (type) {
      case `basicUI`:
        return false;
      case `killerUI`:
        if (stage.id !== `setup`) return false;
        return true;
      case `otherPlayer`:
        if (myRole === 'ghost' || myRole === 'spectator') return false;
        if (stage.type !== `round` || !canIAccuse) return false;
        return true;
      default:
        return console.log(`Err! placeholder`);
    };
  };

  const isHighlighted = (cardId) => {
    if (myRole === 'hunter' || myRole === 'witness') return false;
    if (keyEv) return keyEv.includes(cardId);
  };

  return (
    <ul className={`c-group ${cardType}`}>
    {cards.map((card) => (
      <Card
        key={card.id}
        id={card.id}
        card={card}
        className={card.type}
        isHighlighted={isHighlighted(card.id)}
        isEnabled={isEnabled(card.id)}
        isSelected={selectedId === card.id}
        handleClick={selectCardHandler}
      />
    ))}
  </ul>
  );
};

export default Cards;
