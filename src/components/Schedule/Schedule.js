import React from "react";
import Logo from "../Logo/Logo";
import Location from "../../Images/location.svg";
import Date from "../../Images/calendar.svg";
import Grid from "../../Images/grid.svg";
import Button from "../Button/Button";
export default function Schedule() {
  return (
    <div className="bg-[#FFF] rounded-[10px] shadow-lg mb-[50px]">
      <div className="flex items-center justify-center p-[25px]">
        <div className="Card">
          <div className="flex items-center  gap-[16px]">
            <Logo img={Location} imgName={"location"} />
            <h3 className="font-normal text-[18px] text-[#001F29]">Location</h3>
          </div>
          <div className="bg-[#FAFAFA] rounded-[10px] w-[225px] h-[50px] p-[16px] mx-14">
            <h3 className="font-normal text-[14px] text-[#ABADAD]">
              Jakarta, Indonesia
            </h3>
          </div>
        </div>
        <div className="Card">
          <div className="flex items-center  gap-[16px]">
            <Logo img={Date} imgName={"Date"} />
            <h3 className="font-normal text-[18px] text-[#001F29]">Date</h3>
          </div>
          <div className="bg-[#FAFAFA] rounded-[10px] w-[225px] h-[50px] p-[16px] mx-14">
            <h3 className="font-normal text-[14px] text-[#ABADAD]">
              25 June, 2021
            </h3>
          </div>
        </div>
        <div className="Card">
          <div className="flex items-center  gap-[16px]">
            <Logo img={Grid} imgName={"Grid"} />
            <h3 className="font-normal text-[18px] text-[#001F29]">
              Vaccine Type
            </h3>
          </div>
          <div className="bg-[#FAFAFA] rounded-[10px] w-[225px] h-[50px] p-[16px] mx-14">
            <h3 className="font-normal text-[14px] text-[#ABADAD]">Cinovac</h3>
          </div>
        </div>
        <Button btnName={"Find"} />
      </div>
    </div>
  );
}
