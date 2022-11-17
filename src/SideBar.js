import React from 'react'
import './SideBar.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatIcon from '@mui/icons-material/Chat';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from './SidebarChat'

const SideBar = () => {
  return (
    <div className='sidebar'>
       <div className='sidebar__header'>
       <AccountCircleIcon/>

        <div className='sidebar__headerRight'>
           <IconButton>
           <DonutLargeIcon/>
           </IconButton>


           <IconButton>
           <ChatIcon/>
           </IconButton>

           <IconButton>
           <MoreVertIcon/>
           </IconButton>

        </div>
       </div> 


       <div className='sidebar__search'>
        <div className='sidebar__searchContainer'>

        <SearchIcon/>
        <input placeholder="Search or start new chart"/>

        </div>
       </div>
 
       <div className='sidebar__chats'>
       <SidebarChat addNewChat/>
       <SidebarChat/>
       <SidebarChat/>
       <SidebarChat/>
       </div>
    </div>
  )
}
  
export default SideBar