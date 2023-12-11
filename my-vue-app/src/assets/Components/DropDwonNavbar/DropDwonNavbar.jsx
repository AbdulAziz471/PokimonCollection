import React from "react";
import { useData } from "../../../DataContext";

export default function DropDwonNavbar() {
  const { data } = useData();

  if (!Array.isArray(data) || data.length === 0) {
    return <p>No data available</p>;
  }

  const uniqueTypes = Array.from(new Set(data.flatMap((types) => types.types)));

  return (
    <>
      <ol>
        {uniqueTypes.map((type, index) => (
          <a href="">
            <li key={index}>{type}</li>
          </a>
        ))}
      </ol>
    </>
  );
}
