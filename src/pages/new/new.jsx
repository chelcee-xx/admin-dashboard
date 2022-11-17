import React from 'react'
import "./new.scss"
import Navbar from '../../components/navbar/navbar';
import Sidebar from '../../components/sidebar/sidebar';

const New = () => {
  return (
    <div className='new'>
    <Sidebar/>
    <div className="newContainer">
      <Navbar/>
      <div className="top">
        <h1>Add new user</h1>
      </div>
      <div className="bottom">
        <div className="left">left</div>
        <div className="right">right</div>
      </div>

    </div>
    </div>
  )
}

export default New