import React from "react";
import "./search.scss";
import { AiOutlineClose } from "react-icons/ai";
import SearchForm from "../SearchForm/SearchForm";

const Search = ({ isOpen, onDropdownSearch }) => {
  return (
    <div className={isOpen ? "search-container active" : "search-container"}>
      <SearchForm />
      <AiOutlineClose onClick={onDropdownSearch} />
    </div>
  );
};

export default Search;
