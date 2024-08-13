import React from "react";
import {Link} from "react-router-dom";

export default function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>

      {/* //now we are creating the form */}
      <form className="flex flex-col justify-center items-center gap-4 ">
        <input
          type="text"
          placeholder="Username"
          className="border p-3 rounded-lg "
          id="username"
        />

        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg"
          id="email"
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg"
          id="password"
        />
        <button className="bg-slate-900 text-slate-200 rounded w-50 px-20 py-2 hover:shadow-2xl hover:opacity-80  disabled:opacity-50">
          Sign UP
        </button>
      </form>
      <div className="flex gap-2 mt-5 items-center mx-auto justify-center">
        <p> Have an account ?</p>
        <Link to={"/sign-in"}>
            <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
    </div>
  );
}
