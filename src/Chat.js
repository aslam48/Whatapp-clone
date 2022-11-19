import React, { useEffect, useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Chat.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


const Chat = () => {
    const [seed, setSeed] = useState("");

    useEffect(()=> {
        setSeed(Math.floor(Math.random()* 5000))
    },[])

  return ( 
    <div className='chat'>
        <div className='chat__header'>
            <AccountCircleIcon src={`https://avatars.dicebear.com/api/${seed}.svg`}/>
       

        <div className='chat__headerInfo'>
            <h3>Room name</h3>
            <p>last seen at ...</p>
        </div>

        <div className='sidebar__headerRight'>
           <IconButton>
           <SearchIcon/>
           </IconButton>


           <IconButton>
           <AttachFileIcon/>
           </IconButton>

           <IconButton>
           <MoreVertIcon/>
           </IconButton>
        </div>
        </div>

        <div className='chat__body'>
            <p className='chat__message'>hey aslam</p>
        </div>
        
        <div className='chat__footer'>

        </div>
    </div>
  )
}

export default Chat