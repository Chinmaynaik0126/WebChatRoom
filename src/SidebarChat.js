import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './SidebarChat.css'

function SidebarChat({addNewChat}) {
    const[seed, setSeed]= useState('');

    useEffect(() => {
       setSeed(Math.floor(
           Math.random()*5000
       ))
        
    }, []);
    const createChat = () =>{
        const roomName = prompt("please enter name for the chat")
        if(roomName){
            //do some database
        }

    }
    return !addNewChat ?(
        <div className="sidebarChat">
            <Avatar src= {`https://avatars.dicebear.com/api/bottts/${seed}.svg`}/>
            <div className="sidebarChat__info">
                <h2>Room Name</h2>
                <p>Last msg..</p>
            </div>
        </div>
    ):(
        <div onClick={createChat}
        className="sidebarChat">
            <h2>Add new Chat</h2>
        </div>
    );
}

export default SidebarChat
