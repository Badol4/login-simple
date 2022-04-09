
import './App.css';
import app from './firebase.init';
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup,GithubAuthProvider } from "firebase/auth";
import React, { useState } from 'react';
import {signOut } from "firebase/auth";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const provider2 = new GithubAuthProvider();


function App() {
  const [user, setUser] = useState({})
  const auth = getAuth();

  const LoginWiteGit = () => {
    signInWithPopup(auth, provider2)
  .then((result) => {
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    setUser(user)
    console.log(user);
  })
  }

  const handle = () => {
    signOut(auth).then(() => {
      setUser({})
    })
    
  }
  const handleAddTo = () => {
    signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
    setUser(user)
    console.log(user);
  })
 

  

   
   }
  return (
    <div className="App">
      {
       user.uid? <button onClick={handle}>Sing out</button> : <div>
         <button onClick={handleAddTo}>google</button>
         <button onClick={LoginWiteGit}>login with gitmama</button>
       </div>
      
      }
      
      <h1>
        {
          user.displayName
        
        }
        {
          <img src={user.photoURL} alt="" />
        }
      </h1>
     
    </div>






           








  );
}

export default App;
