import React, { useState, useEffect } from 'react';
import Stage from './Stage';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { fetchTasks } from '../api/data';

function Board() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch tasks data when the component mounts
    fetchTasks()
      .then((data) => {
        setTasks(data);
        setIsLoading(false); // Set loading state to false after data is fetched
      })
      .catch((error) => {
        console.error('Error fetching tasks:', error);
        setIsLoading(false); // Set loading state to false in case of an error
      });
  }, []);

  const moveTask = (id, newStage) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, stage: newStage } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="Board">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            <Stage
              stage="Todo"
              tasks={tasks.filter((task) => task.stage === 'Todo')}
              moveTask={moveTask}
            />
            <Stage
              stage="Doing"
              tasks={tasks.filter((task) => task.stage === 'Doing')}
              moveTask={moveTask}
            />
            <Stage
              stage="Done"
              tasks={tasks.filter((task) => task.stage === 'Done')}
              moveTask={moveTask}
            />
          </>
        )}
      </div>
    </DndProvider>
  );
}

export default Board;
