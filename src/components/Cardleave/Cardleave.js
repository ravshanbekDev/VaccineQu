import React from "react";

export default function Cardleave({ caption, description }) {
  return (
    <div>
      <h3 className="text-[18px] font-normal text-[#001F29]">{caption}</h3>
      <div className="bg-[#FAFAFA] rounded-[10px] max-w-[375px] p-4 mt-4">
        <p className="text-[14px] font-normal text-[#ABADAD]">{description}</p>
      </div>
    </div>
  );
}
