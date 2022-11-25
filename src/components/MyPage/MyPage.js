import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import './mypage.css'
//------------------------------------------
import firebase from 'firebase/compat/app'
import { auth } from '../../firebase'
import { getAuth, signInAnonymously } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth'
//------------------------------------------
// import { signInWithPopup } from 'firebase/auth'
// import { auth, provider } from '../../firebase';
// import { useAuthState } from 'react-firebase-hooks/auth'
import { FcGoogle } from 'react-icons/fc';

function MyPage() {
  const [user] = useAuthState(auth);
  return (
    <>
      <div className='mainarea'>
        {user ? (
          <>
            <UserInfo />
            <SignOutButton />
          </>
        ) : (
          <SignInButton />
        )}
      </div>
      <Footer />
    </>
  )
}

export default MyPage

function SignInButton() {
  const signinGoogle = () => {
    // signInWithPopup(auth, provider);
    const gprovider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(gprovider);
  }
  return (
    <>
      <p className='logintext'>登録不要、Googleのアカウントで簡単にログインする事ができ
        <br />コミュニティチャットなどの機能が開放されます</p>
      <div className='buttons'>
        <button className='login' onClick={signinGoogle}>GoogleLogin&emsp;&emsp;<FcGoogle /></button>
      </div>
    </>
  )
}

function SignOutButton() {
  return (
    <div className='buttons'>
      <button className='logout' onClick={() => auth.signOut()}>Logout</button>
    </div>
  )
}

function UserInfo() {
  return (
    <div className='userinfo'>
      <img src={auth.currentUser.photoURL} alt="usericon" />
      <p className='username'>こんにちは、{auth.currentUser.displayName}さん</p>
      <p className='username'><Link to="/chatroom">コミュニティチャットへ</Link></p>
    </div>
  );
}