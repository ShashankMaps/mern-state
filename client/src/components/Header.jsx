import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        {/* //this is the logo created  */}
        <Link to={"/"}>
            <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Moon</span>
            <span className="text-slate-700">Estate</span>
            </h1>
        </Link>

        {/* //now i creating the search bar for the website */}

        
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input 
                type="text" 
                placeholder="Search..." 
                className="bg-transparent focus:outline-none w-24 sm:w-64"/>
          <FaSearch className="text-slate-500"/>
        </form>

        <ul className="flex gap-3 font-bold">
            <Link to={"/"}>
                <li className="hidden sm:inline text-slate-950 hover:underline">Home</li>
            </Link>

            <Link to={"/about"}>
                <li className="hidden sm:inline text-slate-950 hover:underline">About</li>
            </Link>

            <Link to={"/sign-in"}>
            <li className="sm:inline text-slate-950 hover:underline">Sign In</li>
            </Link>
        </ul>
      </div>
    </header>
  );
}
