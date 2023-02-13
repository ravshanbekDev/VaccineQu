import React from "react";

export default function Select({ caption, description }) {
  return (
    <div>
      <h3 className="text-[18px] font-normal text-[#001F29]">{caption}</h3>
      <select className="bg-[#FAFAFA] rounded-[10px] max-w-[375px] w-[100%] p-4 mt-4">
        <option className="text-[14px] font-normal text-[#ABADAD]">{description}</option>
      </select>
    </div>
  );
}
