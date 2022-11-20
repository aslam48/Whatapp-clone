import React, { useEffect, useState} from 'react'
import './SideBar.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatIcon from '@mui/icons-material/Chat';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from './SidebarChat'

// import db from './firebase'

const SideBar = () => {

  const [rooms, setRooms] = useState([])

  // useEffect(()=> {
  //   db.collection("rooms").onSnapshot((snapshot) => 
  //     setRooms(snapshot.docs.map((doc) => ({
  //       id: doc.id,
  //       data: doc.date()
  //     })))
  //   )
  // },[])

  
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
       {/* {rooms.map(room => (
        <SidebarChat key={room.id} id={room.id} name={room.data.name}/>
       ))} */}
      
      <SidebarChat/>
      <SidebarChat/>
       </div>
    </div>
  )
}
  
export default SideBar