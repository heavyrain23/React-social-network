import React from 'react';
import './App.css';
import { Route, Link, BrowserRouter} from 'react-router-dom'
import Header from'./components/Header/Header';
import Navbar from'./components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';


const App = (props) => {

  return (
           <div className ="app-wrapper">
            <Header />
            <Navbar />
            <div className = "app-wrapper-content">
                <Route path='/Dialogs' 
                    render={ () => <Dialogs store={props.store} /> } />
                <Route path='/Profile'
                     render={ () => <Profile 
                        profilePage={props.state.profilePage} 
                        dispatch={props.dispatch}  /> } />
            </div>
        </div>
    )
    
}

export default App;


