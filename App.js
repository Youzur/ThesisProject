import React from 'react';
import './App.css';
import CustomLogIn from "./package/CustomLogIn";
import CustomLayout from "./package/components/layouts/CustomLayout";
import CustomTextField from "./package/components/textfields/CustomTextField";
//import {RegisterButton} from "./package/components/buttons/RegisterButton";

function App() {
  return (
    <div className="App">
        <h1>A Simple Log-In</h1>
        {/*<div className={'customLayout'}>
            <label>Enter Name</label>
            <br/>
            <input className={'customTextField'} type={'text'}/>
            <br/>
            <label>Enter Password</label>
            <br/>
            <input className={'customTextField'} type={'text'}/>
            <br/>
            <br/>
            <button id={'loginButton'} type={'submit'}>Log In</button>
            <button id={'registerButton'} type={'submit'}>Register</button>
            <br />
            <a href={'https://en.wikipedia.org/wiki/Self-service_password_reset'}>Forgot password?</a>
        </div>*/}

        <CustomLogIn />
    </div>
  );
}

export default App;
