import React, {useEffect, useContext } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login' 
import Home from './Pages/Home'
import Create from './Pages/Create';
import View from './Pages/ViewPost';
import Post from './store/ViewContext'
import {auth} from './firebase/config'
import {onAuthStateChanged} from 'firebase/auth';
import './App.css';

import {AuthContext, FirebaseContext } from './store/FirebaseContext';

function App() {
  const {user,setUser}=useContext(AuthContext)
  const {firebase}=useContext(FirebaseContext)
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  })
  return (
    <div>
      <Post>
      <Router>
        <Routes>
        <Route  path='/' element={<Home />} />
        <Route  path='/signup' element={<Signup />} />
        <Route  path='/login' element={<Login />} />
        <Route  path='/sell' element={<Create />} />
        <Route  path='/view' element={<View />} />

        </Routes>
        
      </Router>
      </Post>
    </div>
  );
}

export default App;