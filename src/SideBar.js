import React from 'react'
import './SideBar.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const SideBar = () => {
  return (
    <div className='sidebar'>
       <div className='sidebar__header'>

       </div>


       <div className='sidebar__search'>
<AccountCircleIcon/>
<DonutLargeIcon/>
<MoreVertIcon/>
       </div>
 
       <div className='sidebar__chats'>

       </div>
    </div>
  )
}
  
export default SideBar