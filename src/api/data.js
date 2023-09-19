
// Mock data for boards, stages, and tasks
const mockData = {
    boards: [
      { id: 1, name: 'Board 1' },
      { id: 2, name: 'Board 2' },
    ],
    stages: ['Todo', 'Doing', 'Done'],
    tasks: {
      Todo: [{ id: 1, text: 'Task 1' }, { id: 2, text: 'Task 2' }],
      Doing: [{ id: 3, text: 'Task 3' }],
      Done: [{ id: 4, text: 'Task 4' }],
    },
  };
  
  // Simulate fetching boards from an API
  export function fetchBoards() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockData.boards);
      }, 1000); // Simulate a delay of 1 second
    });
  }
  
  // Simulate fetching tasks for a board from an API
  export function fetchTasksForBoard(boardId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        // You can add logic here to return tasks for the specified board
        resolve(mockData.tasks);
      }, 1000); // Simulate a delay of 1 second
    });
  }
  
  // Simulate fetching stages for a board from an API
  export function fetchStagesForBoard(boardId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockData.stages);
      }, 1000); // Simulate a delay of 1 second
    });
  }
  