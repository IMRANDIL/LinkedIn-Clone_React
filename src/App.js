import React from 'react';


import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';







function App() {
  return (
    <div className="app">



      {/* Header */}

      <Header />


      {/* App_Body */}
      <div className="app__body">
        {/* sidebar */}
        <Sidebar />



        {/* Feed */}
        {/* Widgets */}
      </div>


    </div>
  );
}

export default App;
