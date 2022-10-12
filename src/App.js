import React from 'react';
import './App.scss';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import Profile from './Components/Profile/Profile';
import Music from './Components/Music/Music';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';
import Footer from './Components/Footer/Footer';
import MyFriends from './Components/My friends/MyFriends';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/usersContainer';


const App = ( props ) => {
    return (
        <div className='bodyWrapper'>
            <div className='app-wrapper'>
                <Header/>
                <div className='mainBlock'>
                    <div className='navBarWrapper'>
                        <NavBar/>
                    </div>
                    <div className='appContentWrapper'>
                        <Routes>
                            <Route path="/profile" element={ <Profile /> }/>
                            <Route path="/dialogs/*" element={ <DialogsContainer /> }/>
                            <Route path="/users" element={ <UsersContainer/> }/>
                            <Route path="/news" element={ <News/> }/>
                            <Route path="/music" element={ <Music/> }/>
                            <Route path="/settings" element={ <Settings/> }/>
                            <Route path="/friends" element={
                                <MyFriends />
                            }/>
                            <Route path="/" element={ <Profile /> }/>
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
