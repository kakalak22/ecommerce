import React, { useEffect, useState } from "react";
import "./ItemsList.scss";
import SingleItem from "../../common/SingleItem/SingleItem";
import { animateScroll } from "react-scroll";
import * as services from "../../services/fakeItemsService";
import { HashLoader } from "react-spinners";
import { BsFilterLeft } from "react-icons/bs";
import Sweetpagination from "sweetpagination";
import { useStore } from "../../store";
import { useSearchParams } from "react-router-dom";
import Filter from "./Filter";

const ItemsList = () => {
  const [search] = useSearchParams();
  const [items, setItems] = useState([]);
  const [baseItems, setBaseItems] = useState([]);
  const [currentPageData, setCurrentPageData] = useState([]);
  const [isFilter, setIsFilter] = useState(false);
  const [isFilterApplied, setIsFilterApplied] = useState(false);
  const [state] = useStore();

  const scrollOpt = {
    duration: 300,
  };

  const handleIsFilter = () => {
    setIsFilter(false);
  };

  const handleIsFilterApplied = (status) => {
    setIsFilterApplied(status);
  };

  useEffect(() => {
    // animateScroll.scrollTo(45, scrollOpt);
    animateScroll.scrollTo(0, scrollOpt);
  }, [currentPageData]);

  useEffect(() => {
    const items = services.getItems();
    setBaseItems(items);
    setItems(items);
  }, []);

  useEffect(() => {
    const searchQuery = search.get("search") || null;
    const priceParams = search.get("price")?.split(",") || null;
    const categoriesParams = search.get("categories")?.split(",") || null;
    const filteredItems = baseItems.filter((item) => {
      const priceMatch = priceParams
        ? item.discountedPrice <= priceParams[1] &&
          item.discountedPrice >= priceParams[0]
        : true;
      const categoryMatch = categoriesParams
        ? categoriesParams.includes(item.category.id)
        : true;
      const itemNameMatch = searchQuery
        ? item.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
        : true;
      return priceMatch && categoryMatch && itemNameMatch;
    });

    isFilterApplied && setItems(filteredItems);
  }, [search]);

  return (
    <div className="itemslist">
      <div className="itemslist__inner">
        <Filter
          isFilter={isFilter}
          onFilter={handleIsFilter}
          onFilterApplied={handleIsFilterApplied}
        />
        <div className="list">
          <div
            className="filter-button-container"
            onClick={() => setIsFilter(true)}
          >
            <BsFilterLeft />
            <span> Filter</span>
          </div>
          {currentPageData.length > 0 ? (
            <div className="items-container">
              {currentPageData.map((item, index) => (
                <SingleItem key={index} item={item} />
              ))}
            </div>
          ) : isFilterApplied ? (
            <div style={{ textAlign: "center" }}>
              <h3>Item Not Found</h3>
            </div>
          ) : (
            <div className="loading-container">
              <HashLoader color="#ccc8c8" />
            </div>
          )}
          <Sweetpagination
            currentPageData={setCurrentPageData}
            getData={items}
            dataPerPage={6}
            navigation={true}
            getStyle={"style-custom"}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemsList;
