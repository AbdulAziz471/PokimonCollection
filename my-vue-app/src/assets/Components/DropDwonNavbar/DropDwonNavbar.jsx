// DropDwonNavbar.jsx
import React from "react";
import { useData } from "../../../DataContext";
import { useTheme } from "../../../ThemeContext";

export default function DropDwonNavbar({ onCategorySelect }) {
  const {} = useTheme();

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
            <li className="   px-1 py-1       hover:translate-x-1 transition duration-500 hover:text-purple-600 dark:text-white  dark:border-lightgrey-2 ">
              {type}
            </li>
          </a>
        ))}
      </ol>
    </>
  );
}
