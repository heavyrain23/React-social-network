import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Header from'./components/Header/Header';
import Navbar from'./components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';


const App = () => {

  return (
           <div className ="app-wrapper">
            <Header />
            <Navbar />
            <div className = "app-wrapper-content">
                <Route path='/Dialogs' 
                    render={ () => <DialogsContainer /> } />
                <Route path='/Profile'
                     render={ () => <Profile/> } />
            </div>
        </div>
    )
    
}

export default App;

