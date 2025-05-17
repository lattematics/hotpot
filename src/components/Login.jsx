/*
  AI Usage: Approximately 10 lines of code was written with the help of Google AI Overview (Gemini).
  The tool was used to learn how to create the login and signup forms. 
  I could've looked through sources like YouTube, StackOverflow, etc but it was the first thing that appeared when I was searching. 
*/

import React, { useState } from 'react';
import { db, auth } from "../firebase";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { signInWithEmailAndPassword }  from "firebase/auth";

function showMessage(message, divId){
  var messageDiv=document.getElementById(divId);
  messageDiv.style.display="block";
  messageDiv.innerHTML=message;
  messageDiv.style.opacity=1;
  setTimeout(function(){
      messageDiv.style.opacity=0;
  },5000);
}

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
        showMessage('login is successful', 'logInMessage');
        const user=userCredential.user;

        setTimeout(function () {
          window.location = '/';
        }, 2000);
    })
    .catch((error)=>{
        const errorCode=error.code;
        if(errorCode==='auth/invalid-credential'){
            showMessage('Incorrect Email or Password', 'logInMessage');
        }
        else{
            showMessage('Account does not Exist', 'logInMessage');
        }
    })
  };

  return (
    <form class="log" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div id="logInMessage" class="messageDiv" style={{display: 'none'}}></div>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Log In</button>
    </form>
  );
}

export default Login;