import React from 'react';
import { useDrag } from 'react-dnd';

function Task({ task }) {
  const [, drag] = useDrag({
    type: 'TASK',
    item: { id: task.id },
  });

  return (
    <div className="Task" ref={drag}>
      {task.text}
    </div>
  );
}

export default Task;
