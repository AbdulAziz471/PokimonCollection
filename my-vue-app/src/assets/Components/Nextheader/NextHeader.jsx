import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";
import dark from "../../Images/dark.svg";
import light from "../../Images/light.svg";
import { useTheme } from "../../../ThemeContext";
export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavLink to="/">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavLink>
      <NavbarContent className="hidden sm:flex gap-4 w-full" justify="center">
        <NavbarItem isActive={location.pathname === "/Feature"}>
          <NavLink color="foreground" to="/Feature">
            FeaturesCard
          </NavLink>
        </NavbarItem>
        <NavbarItem isActive={location.pathname === "/Compare"}>
          <NavLink color="foreground" to="/Compare">
            Compare
          </NavLink>
        </NavbarItem>
        <NavbarItem isActive={location.pathname === "/contact"}>
          <NavLink color="foreground" to="/contact">
            Contact
          </NavLink>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      <button onClick={toggleTheme}>
        {theme === "light" ? (
          <img src={dark} alt="Dark Mode" />
        ) : (
          <img src={light} alt="Light Mode" />
        )}
      </button>
    </Navbar>
  );
}
