import React from "react";
import Button from "../Button/Button";
import Box from "../Box/Box";
export default function Hero() {
  return (
    <div className=" max-w-[1220px] mx-auto px-5 py-[110px] flex items-center justify-between">
      <div>
        <h1 className="font-medium text-[48px] text-[#001F29] leading-[64px] max-w-[390px] mb-[16px]">
          Get Your Vaccine, Get Your Health
        </h1>
        <p className="text-[14px] text-[#B9C0C1] max-w-[410px] mb-[32px]">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, <br />
          by injected humour
        </p>
        <div className="flex gap-[16px]">
          <Button btnName={"Get Your Vaccine"} />
          <Button border={true} btnName={"Learn more"} />
        </div>
      </div>
      <Box />
    </div>
  );
}
