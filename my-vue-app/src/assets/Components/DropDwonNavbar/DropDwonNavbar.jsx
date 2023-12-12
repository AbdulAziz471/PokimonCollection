// DropDwonNavbar.jsx
import React from "react";
import { useData } from "../../../DataContext";
export default function DropDwonNavbar({ onCategorySelect }) {
  const { data } = useData();
  if (!Array.isArray(data) || data.length === 0) {
    return <p>No data available</p>;
  }
  const uniqueTypes = [
    "All Categories",
    ...Array.from(new Set(data.flatMap((types) => types.types))),
  ];
  const handleCategorySelect = (category) => {
    onCategorySelect(category);
  };
  return (
    <>
      <ol>
        {uniqueTypes.map((type, index) => (
          <a href="#" key={index} onClick={() => handleCategorySelect(type)}>
            <li>{type}</li>
          </a>
        ))}
      </ol>
    </>
  );
}
