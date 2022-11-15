import React from 'react'
import './SideBar.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatIcon from '@mui/icons-material/Chat';

const SideBar = () => {
  return (
    <div className='sidebar'>
       <div className='sidebar__header'>
       <AccountCircleIcon/>
        <div className='sidebar__headerRight'>

           <DonutLargeIcon/>
           <ChatIcon/>
           <MoreVertIcon/>
        </div>
       </div>


       <div className='sidebar__search'>

       </div>
 
       <div className='sidebar__chats'>

       </div>
    </div>
  )
}
  
export default SideBar