import React, { useEffect, useState } from 'react'
import SendMessage from '../SendMessage/SendMessage'
import { db, auth } from '../../firebase'
import './chatarea.css'

function Chat() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    //-------------------------------------------------------
    db.collection("messages")
      .orderBy("createdAt")
      .limit(30)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <div className="messagearea">
      <div className='messages'>
        {messages.map(({ id, text, photoURL, uid }) => (
          <div className="message" id="message">
            <div className="usericon" key={id}>
              <img src={photoURL} alt="投稿者" />
              <p>{auth.currentUser.displayName}さん</p>
            </div>
            <div className='usermessage' id="messages">
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage />
    </div>
  )
}

export default Chat