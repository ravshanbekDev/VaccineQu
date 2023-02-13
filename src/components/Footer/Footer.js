import React from "react";
import Text from "../Text/Text";
import List from "../List/List";
export default function Footer() {
  return (
    <div className="max-w-[1220px] mx-auto px-5 flex items-start justify-between gap-32 py-[80px]">
      <Text />
      <List caption={"Menu"} first={"Home"} secound={"Schedule"} thrid={"Quota"} fourth={"Information"}/>
      <List caption={"Vaccine Type"} first={"Sinovac"} secound={"Astarzon"} thrid={"Sinopahm"} />
      <List caption={"Emergency Contact"} first={"Whatsap"} secound={"Email"} thrid={"Instagram"} fourth={"Telefon Kantor"}/>
    </div>
  );
}
