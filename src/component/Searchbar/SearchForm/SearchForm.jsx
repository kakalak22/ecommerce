import React, { useState } from "react";
import "./SearchForm.scss";
import { BiSearch } from "react-icons/bi";
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";
import { useStore, actions } from "../../../store";

const SearchForm = () => {
  const [state, dispatch] = useStore();
  const [isFocus, setIsFocus] = useState(false);
  const [search, setSearch] = useSearchParams();
  let navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [placeholder, setPlaceholder] = useState("Search products");
  const urlLocation = useLocation();

  const displaySearchInputOutline = isFocus ? " in_focus" : "out_focus";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchInput !== "") {
      if (urlLocation.pathname === "/products") {
        const searchParamKeys = [];
        search.forEach((value, key) => {
          searchParamKeys.push(key);
        });
        searchParamKeys.forEach((key) => search.delete(key));
        dispatch(actions.handlePriceRange([0, 90000000]));
        document
          .querySelectorAll("input[type=checkbox]")
          .forEach((el) => (el.checked = false));
        search.set("search", searchInput);
        setSearch(search);
      } else {
        navigate("/products", {
          state: {
            searchQuery: searchInput,
          },
        });
      }
    } else {
      setPlaceholder("Cannot be blank. Please input product name");
    }
  };

  return (
    <form className={`searchbar__middle__form ${displaySearchInputOutline}`}>
      <input
        type="text"
        placeholder={placeholder}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
      />
      <button
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        <BiSearch />
      </button>
    </form>
  );
};

export default SearchForm;
