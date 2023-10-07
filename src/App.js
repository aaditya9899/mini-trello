import React from 'react';
import Board from '../src/components/Boards';
import './App.css'
function App() {
  return (
    <div className="container-fluid">
      <h1 className='heading text-center'>Mini Trello Clone</h1>
      <Board />
    </div>
  );
}

export default App;
