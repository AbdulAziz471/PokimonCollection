import React from "react";
import CardNavigator from "../Components/CardNavigator/CardNavigator";
import { useData } from "../../DataContext";

export default function ComparePage() {
  const { data } = useData();

  return (
    <>
      <div className="">
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
