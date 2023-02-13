import React from "react";
import Logo from "../Logo/Logo";

export default function Covid({ img, imgName, caption, description }) {
  return (
    <div className="flex items-start flex-col justify-start gap-[16px]">
      <Logo img={img} imgName={imgName} />
      <h3 className="font-normal text-[18px] text-[#001F29]">{caption}</h3>
      <p className="max-w-[200px] font-normal text-[14px] text-[#ABADAD] leading-6">
        {description}
      </p>
    </div>
  );
}
