import React from "react";
import logo from "../assets/refokus.png";
import Button from "./Button";
const Navbar = () => {
  var navLinks = ["Home", "Work", "Culture", "","News"];
  return (
    <div className="max-w-screen-xl py-6 mx-auto  flex items-center justify-between border-b-[1px] border-zinc-700" >
      <div className="nleft flex">
        <img
        src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
        alt="logo"
      />
      <div className="flex gap-14 ml-20">
        {navLinks.map((elem, index) => (
          <a className="text-sm flex items-center gap-1">
            {" "}
            {index === 1 && (
              <span className="inline-block w-1 h-1 rounded-full bg-green-500"></span>
            )}
            {(elem.length === 0) ? (<span className="w-[2px] h-7 bg-zinc-600"></span>):
            (elem)}
          </a>
        ))}
      </div>
      </div>
      <div>
        <Button prop={"Get Started"}/>
      </div>
    </div>
  );
};

export default Navbar;
