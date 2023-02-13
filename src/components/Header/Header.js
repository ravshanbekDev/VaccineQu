import React from "react";
import logo from "../../Images/Logo.svg";
import Navbar from "../Navbar/Navbar";
export default function Header() {
  return (
    <header className="py-6">
      <div className="max-w-[1220px] mx-auto px-5 flex items-center justify-between">
        <a href="/">
          <img src={logo} alt="logo"></img>
        </a>
        <Navbar first={"Home"} second={"Schedule"} third={"Quota"} fourth={"Information"}/>
      </div>
    </header>
  );
}
