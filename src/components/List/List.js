import React from "react";

export default function List({ caption, first, secound, thrid, fourth }) {
  return (
    <ul className="flex flex-col items-start justify-center gap-4">
      <h2 className="font-medium text-[24px] leading-7 text-[#001F29]">
        {caption}
      </h2>
      <li className="font-normal text-[16px] text-[#B9C0C1] leading-[18px]">
        {first}
      </li>
      <li className="font-normal text-[16px] text-[#B9C0C1] leading-[18px]">
        {secound}
      </li>
      <li className="font-normal text-[16px] text-[#B9C0C1] leading-[18px]">
        {thrid}
      </li>
      <li className="font-normal text-[16px] text-[#B9C0C1] leading-[18px]">
        {fourth}
      </li>
    </ul>
  );
}
