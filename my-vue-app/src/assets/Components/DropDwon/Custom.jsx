import React, { useState } from "react";

export default function Custom(props) {
  const [Open, setOpen] = useState(false);

  const toggleDrop = () => {
    setOpen(!Open);
  };
  return (
    <>
      <div className="relitive inline-block w-fit">
        <button
          className={` p-2 mx-4 border-2 rounded-xl cursor-pointer transition duration-1000  ${
            Open ? "bg-[#ddd] " : ""
          }`}
          onClick={toggleDrop}
        >
          {props.title}
        </button>
      </div>
      <div>
        <ul
          className={` p-2 m-2 border  rounded-xl absolute z-index-10 transition duration-1000    dropdown-list  ${
            Open ? "block" : "hidden"
          }`}
        >
          {props.items.map((item) => (
            <li className=" p-2 m-2 border cursor-pointer rounded-xl transition duration-1000 hover:bg-[#f2f2f2] ">
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
