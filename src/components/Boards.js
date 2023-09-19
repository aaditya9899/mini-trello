import React, { useState } from 'react';
import Stage from './Stage';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function Board() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Task 1', stage: 'Todo' },
    { id: 2, text: 'Task 2', stage: 'Todo' },
    { id: 3, text: 'Task 3', stage: 'Doing' },
    { id: 4, text: 'Task 4', stage: 'Done' },
  ]);

  const moveTask = (id, newStage) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, stage: newStage } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="Board">
        <Stage stage="Todo" tasks={tasks} moveTask={moveTask} />
        <Stage stage="Doing" tasks={tasks} moveTask={moveTask} />
        <Stage stage="Done" tasks={tasks} moveTask={moveTask} />
      </div>
    </DndProvider>
  );
}

export default Board;
