import React from "react";
import Dropdown from "../Components/DropDwon/DropDwon";
import CardNavigator from "../Components/CardNavigator/CardNavigator";
import { useData } from "../../DataContext";
import { useTheme } from "../../ThemeContext";

export default function ComparePage() {
  const { theme } = useTheme();
  const { data } = useData();

  return (
    <>
      <div className={theme === "dark" ? "bg-gray-800" : "bg-white"}>
        <Dropdown
          title="Options 2"
          items={[
            {
              index: "new",
              label: "New",
              className: "first-class",
            },
            {
              index: "Update",
              label: "Edit",
              className: "text-danger",
            },
          ]}
        />

        <div className="">
          <p>This is the compare Page</p>
        </div>
        <div className=" flex  width-full flex-row justify-center px-10 py-10 ">
          <div className=" border-2 w-6/12 px-10 py-10 m-6 shadow-2xl rounded-[12px]">
            {data && <CardNavigator data={data} />}{" "}
          </div>
          <div className=" border-2 w-6/12 px-10 py-10 m-6 shadow-2xl rounded-[12px]">
            {data && <CardNavigator data={data} />}{" "}
          </div>{" "}
        </div>
      </div>
    </>
  );
}
