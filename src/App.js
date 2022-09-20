import React from 'react';
import './App.css';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import Profile from './Components/Profile';


const App = () => {
  return (
      <div className='bodyWrapper'>
        <div className='app-wrapper'>
          <Header/>
          <div className='mainBlock'>
            <NavBar/>
            <Profile/>
          </div>
        </div>
      </div>
  );
}

export default App;
