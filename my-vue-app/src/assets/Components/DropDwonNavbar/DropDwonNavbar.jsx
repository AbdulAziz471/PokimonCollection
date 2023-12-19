// DropDwonNavbar.jsx
import React from "react";
import { useData } from "../../../DataContext";
import { useTheme } from "../../../ThemeContext";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

export default function DropDwonNavbar({
  onCategorySelect,
  AssendingSort,
  DesendingSort,
  Reset,
}) {
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
      <div className="py-1">
        <Button onClick={Reset} radius="lg">
          Reset
        </Button>
        <Dropdown>
          <DropdownTrigger>
            <Button variant="bordered">Catagroies</Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            {uniqueTypes.map((type, index) => (
              <DropdownItem
                key={index}
                onClick={() => handleCategorySelect(type)}
              >
                {type}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
      <div className="py-3">
        <Dropdown>
          <DropdownTrigger>
            <Button variant="bordered">Filters</Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem onClick={AssendingSort}>A to Z</DropdownItem>
            <DropdownItem onClick={DesendingSort}>Z to A</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </>
  );
}
