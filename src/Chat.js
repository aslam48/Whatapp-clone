import React, { useEffect, useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Chat.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import MicNoneIcon from '@mui/icons-material/MicNone';


const Chat = () => {
    const [seed, setSeed] = useState("");
    const [input, setInput] = useState("");

    useEffect(()=> {
        setSeed(Math.floor(Math.random()* 5000))
    },[])

    const sendMessage = (e) => {
        e.preventDefault();
        console.log("you typed >>>", input)
        setInput(" ")
    }

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
            <p className={`chat__message ${true && `chat__reciver`}`}>  <span className='chat__name'>Sonny Sangna</span> hey aslam  <span className='chat__timestamp'>3:52pm</span></p>
        </div>


        
        <div className='chat__footer'>
        <SentimentSatisfiedOutlinedIcon />

        <form>
        <input type="text" placeholder="Type a message" value={input} onChange={e => setInput(e.target.value)}/>
        <button type="submit" onClick={sendMessage}>Send a Message</button>
        </form>
        <MicNoneIcon/>
        
        </div>
    </div>
  )
}

export default Chat