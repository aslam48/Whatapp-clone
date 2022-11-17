import React, { useEffect, useState } from 'react'
import './SideBar.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './SidebarChart.css'


const SidebarChat = ({addNewChat}) => {
    const [seed, setSeed] = useState(" ")

    useEffect(()=> {
        setSeed(Math.floor(Math.random()* 5000))
    },[])

const createChat = () => {
    const roomName = prompt("   please enter name for chat")

    if (roomName){

    }
};



  return !addNewChat ?  (
    <div className='sidebarchats'>
       <AccountCircleIcon src={`https://avatars.dicebear.com/api/${seed}.svg`}/>
       <div className='sidebarChart__info'>
        <h2>Room name</h2>
        <p>Last message</p>
       </div>
    </div> 
  ) : (
    <div onClick={createChat} className="sidebarchats"><h2>Add new  Chat</h2></div>
  )
}

export default SidebarChat