import Blog from "../Components/Blog/Blog";
import { useTheme } from "../../ThemeContext";
export default function BlogPage() {
  const { theme } = useTheme();
  return (
    <>
      <div
        className={`min-h-screen ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        }`}
      >
        <h1 className=" text-3xl font-bold underline text-gray-800 dark:text-white">
          {" "}
          CARD COLLECTION
        </h1>
        <Blog />
      </div>
    </>
  );
}
