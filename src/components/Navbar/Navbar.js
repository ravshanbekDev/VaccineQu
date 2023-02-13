import React from "react";
import Button from "../Button/Button";
export default function Navbar({ first, second, third, fourth }) {
  return (
    <nav className="flex items-center space-x-4 gap-10">
      <ul className="list-none flex items-center justify-between gap-10 ">
        <li className="hover:text-[#F75532] font-normal text-[16px] text-[#001F29]">
          <a href="/">{first}</a>
        </li>
        <li className="hover:text-[#F75532] font-normal text-[16px] text-[#001F29]">
          <a href="/">{second}</a>
        </li>
        <li className="hover:text-[#F75532] font-normal text-[16px] text-[#001F29]">
          <a href="/">{third}</a>
        </li>
        <li className="hover:text-[#F75532] font-normal text-[16px] text-[#001F29]">
          <a href="/">{fourth}</a>
        </li>
      </ul>
      <Button btnName={"Call Center"}/>
    </nav>
  );
}
