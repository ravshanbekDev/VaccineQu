import React from "react";
import Cardleave from "../Cardleave/Cardleave";
import Select from "../Select/Select";
import Button from "../Button/Button";
export default function Leave() {
  return (
    <div className="bg-[#FFFFFF] shadow-xl rounded-[10px] max-w-[1220px] mx-auto px-5 py-8 mt-8 flex flex-col gap-12">
      <div className="grid grid-cols-3	grid-template-columns: repeat(3, minmax(0, 1fr)) gap-4">
      <Cardleave caption={"Full Name"} description={"Enter Your name"} />
      <Cardleave caption={"Email or phone number"} description={"Enter your email or number"} />
      <Cardleave caption={"Address"} description={"Full your Address"} />
      <Cardleave caption={"Disease history"} description={"Enter diese history"} />
      <Select caption={"Level Vaccination"} description={"Choose Level"}/>
      <Cardleave caption={"Near Vaccination Location"} description={"Indonesia"} />
      </div>
      <div className="w-[150px] mx-auto"><Button btnName={"Vaccine Now"}/></div>
    </div>
  );
}
