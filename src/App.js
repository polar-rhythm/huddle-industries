import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Team from './components/Team';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <>
      <Nav/>
        <Routes>
          <Route path='/Team' element={<Team/>} />
        </Routes>
      </>
    </div>
  );
}

export default App;
