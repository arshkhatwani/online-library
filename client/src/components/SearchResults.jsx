import React from "react";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import BookTab from "./BookTab";
import LoadingSpinner from "./utils/LoadingSpinner";
import NavbarComp from "./NavbarComp";

function SearchResults() {
  const { books, isLoading } = useSelector((store) => store.books);

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <NavbarComp />

      <div className="d-flex flex-column justify-content-center py-3 px-5">
        <h1 className="text-center mb-3">Search results</h1>
        <SearchBar />

        <div className="my-3 px-4">
          {books.length === 0 && <h1 className="text-center">No results</h1>}
          {books.map((item) => (
            <BookTab bookData={item} key={item._id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default SearchResults;
