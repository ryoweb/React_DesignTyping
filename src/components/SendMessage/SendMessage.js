import React,{ useState } from 'react'
import { db, auth } from '../../firebase'
import firebase from "firebase/compat/app"
import './sendmessage.css'

const ChatRoom = () => {
  const [message, setMessage] = useState("");

  function sendMessage(e) {
    e.preventDefault();
    
    const {uid, photoURL} = auth.currentUser;

    db.collection("messages").add({
        text: message,
        photoURL,
        uid,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMessage("");
  }
  return (
    <div className='sendmsgcontainer'>
        <form onSubmit={sendMessage}>
            <div className="sendMsg">
                <textarea className='sendmsg' placeholder="ここにメッセージを入力" type="text" onChange={(e) => setMessage(e.target.value)} value={message}/>
                <input className="donemsg" type="submit" />
            </div>
        </form>
    </div>
  )
}

export default ChatRoom