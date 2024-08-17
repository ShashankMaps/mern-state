import React from "react";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {getAuth, GoogleAuthProvider, signInWithPopup}  from 'firebase/auth';
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import {useNavigate} from "react-router-dom";

export default function OAuth() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleGoogleClick = async () =>{
        try{
            
            const provider =  new GoogleAuthProvider()
            const auth  = getAuth(app);

            const result = await signInWithPopup(auth, provider);
            console.log(result); //taking data form google in result variable

            //now we will add this data in backend DB =>Mongo DB
            const res = await fetch('api/auth/google',{
                method:'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body:JSON.stringify({name: result.user.displayName, email: result.user.email , photo: result.user.photoURL})
            })

            const data = await res.json();
            console.log("this is the data =>" , data);
            dispatch(signInSuccess(data));

            //navigate to home page
            navigate('/')

            // ################
            // toast("Log In successfully");
            // const error = new Error();
            // error.message = "hi shashank bro you are doing well bro";
            // throw error;
            
        }
        catch(error){
            
            toast(`Could not Sign with Google ${error}` );
        }
    }

  return (
    <button onClick={handleGoogleClick} type="button" className="bg-red-700 text-white rounded w-50 px-20 py-2 hover:shadow-2xl hover:opacity-80 flex flex-row gap-2 font-bold">
      <div className="my-1">
        <FcGoogle />
      </div>
      <div>Continue with google</div>
    </button>
  );
}
