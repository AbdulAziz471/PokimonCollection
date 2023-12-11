import React, { useState } from "react";
import { useData } from "../../../DataContext";
import { Circles } from "react-loader-spinner";
import Article from "../Article/Article";
import Search from "../SearchArticle/Search";
import "./blog.css";
import Pagination from "../Pagination/Pagination";
import DropDwonNavbar from "../DropDwonNavbar/DropDwonNavbar";

export default function Blog() {
  const { data, loading, error } = useData();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  console.log(data);

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

  if (error) return <p>Error loading data!</p>;

  if (!Array.isArray(data) || data.length === 0) {
    return <p>No data available</p>;
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const filteredData = data
    .filter((card) =>
      card.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice(startIndex, endIndex);

  return (
    <>
      <div className="search">
        <Search onSearchChange={handleSearchChange} searchQuery={searchQuery} />
      </div>
      <div className="Categry">
        <DropDwonNavbar />
      </div>
      <div className="containers">
        {filteredData.map((articleData) => (
          <Article key={articleData.id} data={articleData} />
        ))}
      </div>
      <div className="flex width-full justify-center py-[50px] ">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
}
