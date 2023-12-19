import React, { useEffect, useState } from "react";
import { useData } from "../../../DataContext";
import Article from "../Article/Article";
import Skaleton from "../Skeleton/Skeleton";
import Search from "../SearchArticle/Search";
import "./Blog.css";
import Pagination from "../Pagination/Pagination";
import DropDwonNavbar from "../DropDwonNavbar/DropDwonNavbar";

export default function Blog() {
  const { data, loading, error, favorites } = useData();
  const [AsortedData, setASortedData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [selectedCategory, setSelectedCategory] = useState(null);
  const FilterReset = () => {
    setASortedData(data);
    setSelectedCategory(null);
  };

  useEffect(() => {
    setASortedData(data);
  }, [data]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category === "All Categories" ? null : category);
  };

  const AssendingSort = () => {
    const Asorted = [...data].sort((a, b) => a.name.localeCompare(b.name));
    setASortedData(Asorted);
  };

  const DesendingSort = () => {
    const Dsorted = [...data].sort((a, b) => b.name.localeCompare(a.name));
    setASortedData(Dsorted);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const totalPages = AsortedData
    ? Math.ceil(AsortedData.length / itemsPerPage)
    : 0;
  const favoritesCount = favorites.length;

  if (loading) {
    return <Skaleton />;
  }

  if (error) {
    return <p>Error loading data!</p>;
  }

  if (!Array.isArray(AsortedData) || AsortedData.length === 0) {
    return <p>No data available</p>;
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const filteredData = AsortedData.filter((card) =>
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
          <Search
            onSearchChange={handleSearchChange}
            searchQuery={searchQuery}
          />
          <DropDwonNavbar
            onCategorySelect={handleCategorySelect}
            AssendingSort={AssendingSort}
            DesendingSort={DesendingSort}
            Reset={FilterReset}
          />
        </div>
        <div>
          <div className="flex flex-col  px-10">
            <div className="flex items-center justify-between ">
              <h1 className="py-[30px] text-[50px] dark:text-white">
                {selectedCategory || "All Categories"}
              </h1>
              <h2 className="text-center dark:text-white pr-8">
                Favorite Cards:{" "}
                <span className="font-bold">{favoritesCount}</span>
              </h2>
            </div>
            <div className="grid grid-cols-5 gap-5">
              {filteredData.map((articleData) => (
                <Article key={articleData.id} data={articleData} />
              ))}
            </div>
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
}
