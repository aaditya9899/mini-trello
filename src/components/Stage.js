import React from 'react';
import Task from './Tasks';
import { useDrop } from 'react-dnd';

function Stage({ stage, tasks, moveTask }) {
  const [, drop] = useDrop({
    accept: 'TASK',
    drop: (item) => moveTask(item.id, stage),
  });

  return (
    <div className="Stage" ref={drop}>
      <h2>{stage}</h2>
      <div className="TaskList">
        {tasks
          .filter((task) => task.stage === stage)
          .map((task) => (
            <Task key={task.id} task={task} />
          ))}
      </div>
    </div>
  );
}

export default Stage;
