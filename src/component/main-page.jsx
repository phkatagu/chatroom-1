import React from 'react'
import DisplayMgs from './displayMgs';
import './main-page.css';
import NavBar from './nav';
function MainPage() {

  return (
    <div className="container1">
      <div className="griting">Welcome to <span>Chat Room</span></div>
      <div className="container2">
        <NavBar/>
        <DisplayMgs/>
      </div>
    </div>
  )
}

export default MainPage;
