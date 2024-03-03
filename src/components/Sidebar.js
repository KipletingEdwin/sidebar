import React from 'react'
import '../App.css';
import { SidebarData } from './SidebarData';

function Sidebar() {
  return (
    <div className='Sidebar'>
      <ul className='SidebarList'> 
      {
        SidebarData.map((val, id)=>{
          return(
            <li key={id}  className='row'>
              <div id='icon'>
                {val.icon}
              </div>
              <div id='title'>
                {val.title}
              </div>
            </li>
          )
        })
      }
      </ul>
    </div>
  )
}

export default Sidebar