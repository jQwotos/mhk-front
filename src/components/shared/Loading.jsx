import React from 'react';

const Loading = ({
  content,
  color,
  overlay,
  suspenseful,
}) => {
  console.log(content);
  return (
    <div className={`loading ${overlay && 'overlay'} ${suspenseful && 'suspenseful'}`}>
      <div className={`loading-content all-the-dots ${color}`}>{content}</div>
    </div>
  );
};

export default Loading;