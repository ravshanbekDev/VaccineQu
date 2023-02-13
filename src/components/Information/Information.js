import React from "react";
import Schedule from "../Schedule/Schedule";
import Covid from "../Covid/Covid";
import Error from "../../Images/Error.svg";
import UserVoise from "../../Images/User_voice.svg";
import Close from "../../Images/close.svg";
import User from "../../Images/User.svg";
export default function Information() {
  return (
    <div className="max-w-[1220px] mx-auto px-5">
      <h2 className="font-medium text-[24px] text-[#001F29] py-[30px]">
        Schedule Vaccination
      </h2>
      <Schedule />
      <h2 className="font-medium text-[24px] text-[#001F29] py-[30px]">
        Why Vaccine Is Important?
      </h2>
      <p className="font-normal text-[16px] text-[#B9C0C1] leading-10 max-w-[490px] mb-[70px]">
        Combined with a handful of model sentence structures, to generate always
        free from repetition injected.
      </p>
      <div className="flex items-center justify-between ">
        <Covid
          img={Error}
          imgName={Error}
          caption={"Prevent covid 19 virus"}
          description={`Model sentence structures, 
    to generate Lorem which looks reasonable`}
        />
        <Covid
          img={UserVoise}
          imgName={UserVoise}
          caption={"Protect others"}
          description={`Model sentence structures, 
        to generate Lorem which looks 
        reasonable`}
        />
        <Covid
          img={Close}
          imgName={Close}
          caption={"Stop the spread of covid 19"}
          description={`Model sentence structures, 
          to generate Lorem which looks 
          reasonable`}
        />
        <Covid
          img={User}
          imgName={User}
          caption={"Protect the next generation"}
          description={`Model sentence structures, 
          to generate Lorem which looks 
          reasonable`}
        />
      </div>
      <h2 className="font-medium text-[24px] text-[#001F29] mt-[100px]">
        Get Vaccine Now
      </h2>
      <p className="font-normal text-[16px] text-[#B9C0C1] leading-8 max-w-[480px] mt-4">
        Combined with a handful of model sentence structures, generate always
        free from repetition injected.
      </p>
    </div>
  );
}
