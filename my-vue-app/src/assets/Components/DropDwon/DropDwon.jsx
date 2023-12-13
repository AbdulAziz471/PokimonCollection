import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

export default function App(props) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">{props.title}</Button>
      </DropdownTrigger>

      <DropdownMenu aria-label="Static Actions">
        {props.items.map((item) => (
          <DropdownItem key={item.index} className={item.className}>
            {item.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
