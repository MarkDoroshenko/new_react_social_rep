import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import Music from './Components/Music/Music';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';
import Footer from './Components/Footer/Footer';

const App = () => {
    return (
        <div className='bodyWrapper'>
            <div className='app-wrapper'>
                <Header/>
                <div className='mainBlock'>
                    <div className='navBar-wrapper'>
                        <NavBar/>
                    </div>
                    <div className='appContentWrapper'>
                        <Routes>
                            <Route path="/profile" element={<Profile/>}/>
                            <Route path="/dialogs/*" element={<Dialogs/>}/>
                            <Route path="/news" element={<News/>}/>
                            <Route path="/music" element={<Music/>}/>
                            <Route path="/settings" element={<Settings/>}/>
                        </Routes>
                    </div>
                </div>
                <footer>
                    <Footer/>
                </footer>
            </div>
        </div>
    );
}

export default App;
