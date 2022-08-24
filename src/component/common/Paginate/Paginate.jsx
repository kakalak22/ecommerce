import ReactPaginate from "react-paginate";
import React, { useEffect, useState } from "react";

import "./Paginate.scss";
import { useGlobalContext } from "../../../Context";
import * as itemsService from "../../../services/fakeItemsService";

export default function PaginatedItems({ itemsPerPage }) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const { paginatedItems, handlePaginatedItems } = useGlobalContext();

  useEffect(() => {
    // Fetch items from another resources.
    const items = itemsService.getItems();

    const endOffset = itemOffset + itemsPerPage;
    handlePaginatedItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
  };

  return (
    <div className="pagination">
      <ReactPaginate
        nextLabel={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="btn--icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="btn--icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        }
        pageClassName="page"
        pageLinkClassName="page"
        previousLinkClassName="paginate-btn"
        nextLinkClassName="paginate-btn"
        breakLabel="..."
        breakClassName="page"
        breakLinkClassName="page"
        containerClassName="pages"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
