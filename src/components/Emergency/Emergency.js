import React from "react";
import Position from "../Position/Position";
import Contact from "../Contact/Contact";
import Phone from "../../Images/Phone.svg";
import Email from "../../Images/Mail.svg";
import Map from "../../Images/map.svg";
import Chat from "../../Images/Message.svg";
export default function Emergency() {
  return (
    <div className="flex items-center justify-between py-[80px] max-w-[1220px] mx-auto px-5">
      <Position />
      <div>
        <h2 className="text-[#001F29] text-[24px] font-medium">
          Emergency Contact
        </h2>
        <p className="font-normal text-[#B9C0C1] text-[16px] max-w-[480px] mt-8 leading-8 mb-9">
          Combined with a handful of model sentence structures, generate always
          free from repetition injected.
        </p>
        <div className="grid grid-cols-2	grid-template-columns: repeat(2, minmax(0, 1fr)) gap-4">
        <Contact img={Phone} imgName={Phone} caption={"Call"} info={"0822 - xxx - xxx"} btnName={"Call Now"}/>
        <Contact img={Chat} imgName={Chat} caption={"Chat"} info={"Type fast chat"} btnName={"Chat"}/>
        <Contact img={Map} imgName={Map} caption={"Go to Near Location"} info={"You can use emergency"} btnName={"Video Call"}/>
        <Contact img={Email} imgName={Email} caption={"Email"} info={"If you want update"} btnName={"Send Email"}/>
        </div>
      </div>
    </div>
  );
}
