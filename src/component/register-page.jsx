import './resistration_forgot.scss';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth,storage } from '../firebase';
import { async } from '@firebase/util';
import { setUserProperties } from 'firebase/analytics';
import { useState } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import {db} from '../firebase';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [err,setErr] = useState(false);
const navigates = useNavigate()


 const handleSubmit = async(e) => {
  e.preventDefault()
  const userName=e.target[0].value;
  const email=e.target[1].value;
  const password=e.target[2].value;
  const file=e.target[3].files[0];


    try{
        const res = await createUserWithEmailAndPassword(auth, email, password)

        const storageRef = ref(storage, userName);

        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
        (error) => {
        setErr(true)
        }, 
        () => {
  
        getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
        await updateProfile(res.user,{
        displayName: userName,
        photoURL: downloadURL
        })
        await setDoc(doc(db,"users",res.user.uid),{
        uid: res.user.uid,
        displayName: userName,
        email,
        photoURL: downloadURL
       })
       await setDoc(doc(db,"userchat",res.user.uid),{})
       navigates("/main-page")
       
      
    })

  }
);


}catch (err){
  setErr(true)
}
 }

  return (
    <div className='resistrationContainer'>
        <h1>Resister here</h1>
        <div className="cardContainer">
            <div className="cardItems">
                  <form className='form' onSubmit={handleSubmit}>
                    <label htmlFor="userName" className='userName'>User name:</label> <br />
                    <input type="text" className='nameInput'/><br />
                    <label htmlFor="email" className='userEmail'>Email Id:</label> <br />
                    <input type="email" className='emailInput'/><br />
                    <label htmlFor="pasword"className='userPassword'>Password:</label> <br />
                    <input type="password" className='passwordInput'/>
                    <input type="file" className='fileInput' />
                    <button className='button'>
                        Sign Up
                    </button>
                    {err && <span>Something went wrong</span>}
                </form>
                
            </div>
        </div>
        
    </div>
  )
}

export default Register;
