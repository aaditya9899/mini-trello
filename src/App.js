import React from 'react';
import Board from '../src/components/Boards';
import './App.css'
function App() {
  return (
    <div className="App">
    <h1 style={{ color: 'black', textAlign: 'center' }}>Mini Trello Clone</h1>
    <Board />
    </div>
  );
}

export default App;
