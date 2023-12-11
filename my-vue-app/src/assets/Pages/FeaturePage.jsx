// FeaturePage.js
import React from "react";
import { useData } from "../../DataContext";
import Feature from "../Components/Feature/Feature";
export default function FeaturePage() {
  const { favorites } = useData();

  return (
    <>
      <h2>My Favorites</h2>
      <Feature favorites={favorites} />
    </>
  );
}
