// DataContext.js
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";
import axios from "axios";

const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [data, setData] = useState(null);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.pokemontcg.io/v2/cards")
      .then((response) => {
        setData(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fetching data failed", error);
        setError(error);
        setLoading(false);
      });

    const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (storedFavorites) {
      setFavorites(storedFavorites);
    }
  }, []);

  const addFavorite = (item) => {
    const newFavorites = [...favorites, item];
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  const removeFavorite = (itemId) => {
    const newFavorites = favorites.filter((item) => item.id !== itemId);
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  const contextValue = useMemo(
    () => ({
      data,
      loading,
      error,
      favorites,
      addFavorite,
      removeFavorite,
    }),
    [data, loading, error, favorites]
  );

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
}
