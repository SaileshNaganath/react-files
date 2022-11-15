import React,{useContext} from 'react';
import {ThemeContext} from './ThemeProvider';
import './App.css';

function App(){
    const{toggle,toggleFunction}=useContext(ThemeContext);
    return (
        <div className='app' style={{backgroundColor:toggle?'yellow':'white'}}>
            <h1>Simple Context API to Light up the Screen</h1>
            <button onClick={toggleFunction}>Light</button>
        </div>
    );
}

export default App;