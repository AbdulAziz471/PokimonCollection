// Blog.jsx
import React, { useState } from "react";
import { useData } from "../../../DataContext";
import { Circles } from "react-loader-spinner";
import Article from "../Article/Article";
import Search from "../SearchArticle/Search";
import "./Blog.css";
import Pagination from "../Pagination/Pagination";
import DropDwonNavbar from "../DropDwonNavbar/DropDwonNavbar";
export default function Blog() {
  const { data, loading, error, favorites } = useData();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleCategorySelect = (category) => {
    setSelectedCategory(category === "All Categories" ? null : category);
  };

  const favoritesCount = favorites.length;
  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const totalPages = data ? Math.ceil(data.length / itemsPerPage) : 0;

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  if (loading) {
    return (
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        visible={true}
      />
    );
  }
  if (error) {
    return <p>Error loading data!</p>;
  }
  if (!Array.isArray(data) || data.length === 0) {
    return <p>No data available</p>;
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const filteredData = data
    .filter((card) =>
      card.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(
      (card) => !selectedCategory || card.types.includes(selectedCategory)
    )
    .slice(startIndex, endIndex);

  return (
    <>
      <div className="flex flex-row width-full">
        <div className="flex flex-col  w-1/5 py-3 px-4 border-r-2 ">
          <div>
            <Search
              onSearchChange={handleSearchChange}
              searchQuery={searchQuery}
            />
          </div>
          <div>
            <DropDwonNavbar onCategorySelect={handleCategorySelect} />
          </div>
        </div>
        <div>
          <div className="flex flex-col  px-10">
            <div className="flex items-center justify-between ">
              <h1 className="py-[30px] text-[50px] dark:text-white  ">
                {selectedCategory || "All Categories"}{" "}
              </h1>
              <h2 className="text-center dark:text-white pr-8 ">
                Favorite Cards:{" "}
                <span className="font-bold"> {favoritesCount}</span>
              </h2>
            </div>
            <div className="grid grid-cols-5 gap-5">
              {filteredData.map((articleData) => (
                <Article key={articleData.id} data={articleData} />
              ))}
            </div>
          </div>
          <div className="flex width-full justify-center py-[50px]">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}
