import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
import './login-page.css'
function Login() {
    const navigate = useNavigate();
        const goTo = () => {
            navigate('/main-page')
        }
    
  return (
    <div className='logInContainer'>
        <h1>LogIn here</h1>
        <div className="cardContainer">
            <div className="cardItems">
                <form action="" className='form'>
                    <label htmlFor="userName" className='userName'>User name:</label> <br />
                    <input type="text" id='userName' className='userInput'/><br />
                    <label htmlFor="pasword"className='userPassword'>Password:</label> <br />
                    <input type="password" className='userInput' />
                    <div className='fPass'>
                    <Link to={"./register"} className='forgotPass'>Forgot Passsword</Link>
                    <Link to={"./register"} className='newUser'>New User?</Link>
                    </div>
                    <button className='button' onClick={goTo} >
                        Sign In
                    </button>
                </form>
                
            </div>
        </div>
        
    </div>
  )
}

export default Login;
