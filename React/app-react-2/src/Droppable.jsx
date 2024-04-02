import React from 'react';
import {useDroppable} from '@dnd-kit/core';

export function Droppable(props) {
  const {isOver, setNodeRef} = useDroppable({
    id: props.id,
  });

  const style = {
    color: isOver ? 'green' : undefined,
    border: isOver ? '2px solid green' : '2px solid black',
    padding: '16px',
    margin: '16px',
  };
  
  
  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}