import React from "react";
import { Card, Skeleton } from "@nextui-org/react";
export default function Skaleton() {
  const numberofCard = 10;
  const skelaton = Array.from({ length: numberofCard });
  return (
    <>
      <div className="flex flex-row width-full">
        <div className="flex flex-col  w-1/5 py-3 px-4 border-r-2 ">
          <div className="w-full  max-w-{20px} h-7 bg-default-300 rounded-xl items-align flex"></div>
          <div></div>
        </div>
        <div>
          <div className="flex flex-col  px-10">
            <div className="flex items-center justify-between ">
              <h1 className="py-[30px] text-[50px] dark:text-white  "></h1>
              <h2 className="text-center dark:text-white pr-8 ">
                <span className="font-bold"> </span>
              </h2>
            </div>
            <div className="w-full max-w-[100px] h-[70px] gap-3 bg-default-300 rounded-xl pl-2"></div>
            <div className="grid grid-cols-5 gap-x-4  gap-y-6">
              {skelaton.map((item, index) => (
                <div key={index}>
                  <Card
                    className="w-[225px] h-[380px] space-y-5 p-4"
                    radius="lg"
                  >
                    <Skeleton className="rounded-lg">
                      <div className="h-[250px] rounded-lg bg-default-300"></div>
                    </Skeleton>
                    <div className="space-y-3">
                      <Skeleton className="w-3/5 rounded-lg">
                        <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                      </Skeleton>
                      <Skeleton className="w-1/2 rounded-lg">
                        <div className="h-9 w-[100px] rounded-lg bg-default-400"></div>
                      </Skeleton>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          <div className="flex width-full justify-center py-[50px]"></div>
        </div>
      </div>
    </>
  );
}
