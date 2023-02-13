import React from "react";

export default function Button({ btnName, border }) {
  return (
    <button
      className={`${
        border
          ? " border-2 border-[#F75532] text-[#F75532]"
          : "bg-[#FE4610] text-[#FFFFFF]"
      }
    px-[28px] py-[10px] rounded-md md:min-w-[130px]`}
    >
      {btnName}
    </button>
  );
}
