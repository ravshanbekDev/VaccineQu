import React from "react";
import Logo from "../../Images/Logo.svg";

export default function Text() {
  return (
    <div>
      <img src={Logo} alt={Logo}></img>
      <p className="max-w-[360px] font-normal text-[16px] text-[#B9C0C1] leading-8 mt-[16px]">
        Combined with a handful of model sentence structures, generate always
        free from repetition injected chunks as necessary.
      </p>
    </div>
  );
}
