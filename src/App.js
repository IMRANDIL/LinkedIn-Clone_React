import { useSelector } from 'react-redux'
import React from 'react';


import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import { selectUser } from './features/userSlice';
import Login from './Login';







function App() {

  const user = useSelector(selectUser)




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
