import React from 'react'
import '../App.css';
import { SidebarData } from './SidebarData';

function Sidebar() {
  return (
    <div className='Sidebar'>
      <ul> 
      {
        SidebarData.map((val, id)=>{
          return(
            <li key={id} onClick={window.location.pathname = val.link}>
              <div>
                {val.icon}
              </div>
              <div>
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