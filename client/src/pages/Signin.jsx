import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";

export default function SignIn() {
  //function for the form data
  const [formData, setFormData] = useState({});
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);
  const {loading,error} = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
    console.log(formData);
  };

  //toster configuration if sign in success
  const notify = () => toast("Log In successfully");
  //toster if sign in  fails

  //function for the form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); //when we submit the form => //no page Refresh
    try {
      // setLoading(true); //no need after redux
      dispatch(signInStart());
      const res = await fetch("api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }); //sending direct from data is not safe  so we will stringyfy it

      //check waht we got as an responce
      const data = await res.json();
      if (data.success === false) {
        // setError( data.message); //no need after Redux
        dispatch(sign);
        toast(data.message);
        dispatch(signInFailure(data.message));
        // setLoading(false); //no need after Redux
        // setSignInStatus("Sign Up failed");
        // notify();
        return;
      }
      // setSignInStatus("Sign Up Successfully");
      notify();
      dispatch(signInSuccess(data));
      // otheerwise
      // setLoading(false); //no need after Redux
      //navigate to sign in page
      setTimeout(() => {
        navigate("/");
      }, 2000);

      console.log(data);
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      {/* //now we are creating the form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-4 "
      >
        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg"
          id="email"
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-900 text-slate-200 rounded w-50 px-20 py-2 hover:shadow-2xl hover:opacity-80  disabled:opacity-50"
        >
          {loading ? "Loading...." : "Sign In"}
        </button>
      </form>
      <div className="flex gap-2 mt-5 items-center mx-auto justify-center">
        <p>Dont Have an account ?</p>
        <Link to={"/sign-up"}>
          <span className="text-blue-700">Sign up</span>
        </Link>
      </div>
      <ToastContainer />;
    </div>
  );
}
