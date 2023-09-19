// api.js
const mockData = [
    { id: 1, text: 'Task 1', stage: 'Todo' },
    { id: 2, text: 'Task 2', stage: 'Todo' },
    { id: 3, text: 'Task 3', stage: 'Doing' },
    { id: 4, text: 'Task 4', stage: 'Done' },
  ];
  
  export function fetchTasks() {
    // Simulate an API request delay using setTimeout.
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockData);
      }, 1000);
    });
  }
  