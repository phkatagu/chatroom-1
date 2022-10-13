import React from 'react'
import { auth } from '../firebase'
import "./signOut.scss"

function Signout() {
  return (
    <div className='signOutButton'>
        <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  )
}

export default Signout