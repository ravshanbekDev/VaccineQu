import React from "react";

export default function Box() {
  return (
    <div className="flex items-start justify-center gap-[20px]">
      <div className="grid grid-rows-2 grid-flow-col gap-[22px]">
        <div className="w-[175px] h-[184px] bg-[#FFE1D8] rounded-[10px]"></div>
        <div className="w-[175px] h-[184px] bg-[#FFE1D8] rounded-[10px]"></div>
        <div className="w-[175px] h-[184px] bg-[#FFE1D8] rounded-[10px]"></div>
        <div className="w-[175px] h-[184px] bg-[#FFE1D8] rounded-[10px]"></div>
      </div>
      <div className="w-[175px] h-[389px] bg-[#FFE1D8] rounded-[10px]"></div>
    </div>
  );
}
