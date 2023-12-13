// FeaturePage.js
import React from "react";
import { useData } from "../../DataContext";
import Feature from "../Components/Feature/Feature";
import { useTheme } from "../../ThemeContext";
export default function FeaturePage() {
  const { theme } = useTheme();
  const { favorites } = useData();

  return (
    <>
      <div
        className={`min-h-screen ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        }`}
      >
        <h2>My Favorites</h2>
        <Feature favorites={favorites} />
      </div>
    </>
  );
}
