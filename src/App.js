import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react';


import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';







function App() {

  const user = useSelector(selectUser)

  const dispatch = useDispatch()

  useEffect(() => {

    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //user is logged in...
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
        }))

      } else {
        //user is logged out...
        dispatch(logout())
      }
    })



  }, [dispatch])






  return (
    <div className="app">



      {/* Header */}

      <Header />


      {!user ? (<Login />) : (



        <div className="app__body">

          <Sidebar />




          <Feed />

        </div>


      )}







    </div>
  );
}

export default App;
