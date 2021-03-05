import React, { useContext, useState } from 'react'
import { UserContext } from '../contexts/user';
import { signInWithGoogle } from '../services/auth'

export default function GoogleSignIn () {
  const [user, setUser] = useContext(UserContext).user

  const signInGoogleClick = async () => {
    let userBySignIn = await signInWithGoogle();
    if (userBySignIn) {
      setUser(userBySignIn);
    }
  }

  return (
    <div>
      <button className="google-btn" onClick={signInGoogleClick}>Sign In With Google</button>
    </div>
  )
}