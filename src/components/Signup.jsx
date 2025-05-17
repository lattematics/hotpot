/*
  AI Usage: Approximately 10 lines of code was written with the help of Google AI Overview (Gemini).
  The tool was used to learn how to create the login and signup forms. 
  I could've looked through sources like YouTube, StackOverflow, etc but it was the first thing that appeared when I was searching. 
*/

import React, { useState } from 'react';
import { db, auth } from "../firebase";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword }  from "firebase/auth";

function showMessage(message, divId){
    var messageDiv=document.getElementById(divId);
    messageDiv.style.display="block";
    messageDiv.innerHTML=message;
    messageDiv.style.opacity=1;
    setTimeout(function(){
        messageDiv.style.opacity=0;
    },5000);
}

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            const user=userCredential.user;
            const userData={
                email: email,
                password: password
            };
            showMessage('Account Created Successfully', 'signUpMessage');
            const docRef=doc(db, "users", user.uid);
            setDoc(docRef,userData)
            .catch((error)=>{
                console.error("error writing document", error);


            });
        })
        .catch((error)=>{
            const errorCode=error.code;
            if(errorCode==='auth/email-already-in-use'){
                showMessage('Email Address Already Exists!', 'signUpMessage');
            }
            else{
                showMessage('unable to create User', 'signUpMessage');
            }
        })
    };



    return (
    <form class="log" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div id="signUpMessage" class="messageDiv" style={{display: 'none'}}></div>
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
        <button type="submit">Sign Up</button>
    </form>
    );
}

export default Signup;