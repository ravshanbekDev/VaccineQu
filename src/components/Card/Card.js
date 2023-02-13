import React from "react";
export default function Card() {
  return (
    <div className="flex items-end justify-between gap-[16px]">
      <div className="w-[245px] h-[180px] rounded-[15px] bg-[#fff] shadow-xl py-[25px] px-[35px]">
        <h3 className="font-medium text-[18px] text-right px-[55px]">Sinovac</h3>
        <p className="font-normal text-[12px] text-[#B9C0C1] text-right">
          Necessary making this
        </p>
        <button className="border-2 border-[#F75532] text-[#F75532] rounded-[30px] px-[28px] py-[10px] mt-[30px]">
          Get Vaccine
        </button>
      </div>
      <div className="w-[245px] h-[110px] rounded-[15px] bg-[#fff] shadow-xl py-[25px] px-[35px]">
        <h3 className="font-medium text-[18px] text-right">Astrazeneca</h3>
        <p className="font-normal text-[12px] text-[#B9C0C1] text-right">
          Necessary making this
        </p>
      </div>
      <div className="w-[245px] h-[110px] rounded-[15px] bg-[#fff] shadow-xl py-[25px] px-[35px]">
        <h3 className="font-medium text-[18px] text-right">Sinopahrm</h3>
        <p className="font-normal text-[12px] text-[#B9C0C1] text-right">
          Necessary making this
        </p>
      </div>
    </div>
  );
}
