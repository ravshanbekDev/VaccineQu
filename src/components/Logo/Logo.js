import React from "react";

export default function Logo({ img, imgName }) {
  return (
    <div className="w-[40px] h-[40px] bg-[#FFE1D8] rounded-[10px] flex items-center justify-center">
      <img src={img} alt={imgName}></img>
    </div>
  );
}
