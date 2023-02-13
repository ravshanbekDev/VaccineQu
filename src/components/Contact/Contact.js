import React from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";

export default function Contact({ img, imgName, caption, info, btnName }) {
  return (
    <div className="shadow-lg rounded-[10px] p-6 max-w-[280px] max-h-[140px]">
      <div className="flex items-start justify-start gap-4 mb-3">
        <Logo img={img} imgName={imgName} />
        <div className="flex flex-col items-start">
          <h3 className="text-[16px] text-[#001F29] font-medium">{caption}</h3>
          <p className="font-normal text-[16px] text-[#B9C0C1] mb-3">{info}</p>
          <Button btnName={btnName} />
        </div>
      </div>
    </div>
  );
}
