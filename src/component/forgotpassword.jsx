import React from 'react'
import './forgotpassword.css'

export default function Forgotpassword() {
  return (
    <div className='fpContainer'>
    <h1>Recover your password</h1>
    <div className="fpcardContainer">
        <div className="fpcardItem">
            <form action="" className='form'>
                <label htmlFor="email" className='email'>enter your email id:</label> <br />
                <input type="email" id='email' className='userInput'/><br/>
            </form>
            <button className='fpbutton' >
                Generate OTP
            </button>
        </div>
    </div>
    
</div>
  )
}
