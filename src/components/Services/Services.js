import React from "react";
import Card from "../Card/Card";
import Dots from "../../Images/dots.svg";
import Health from "../Health/Health";
export default function Services() {
  return (
    <div className="max-w-[1220px] mx-auto px-5 ">
      <div className="flex items-center justify-between">
        <Card />
        <img src={Dots} alt="Dots" className="mx-12 mt-10"></img>
      </div>
      <Health />
    </div>
  );
}
