import React from "react";
import { useSelector } from "react-redux";

function Pagination({ total, page, setPage }) {
  const { theme } = useSelector(state => state.app);

  console.log(theme);

  return (
    <div className="pagination-container d-flex align-items-center justify-content-end">
      <button
        onClick={() => setPage(prev => prev - 10)}
        disabled={page <= 0}
        className={`btn ${theme === "bright" ? "btn-light" : "btn-dark"} me-2`}
      >
        <span>{"<"}</span>
      </button>
      <div className="counter">
        <span className="me-1">{page + 1}</span>/
        <span className="ms-1">{Math.ceil(total)}</span>
      </div>
      <button
        onClick={() => setPage(prev => prev + 10)}
        disabled={page + 1 >= total}
        className={`btn ${theme === "bright" ? "btn-light" : "btn-dark"} ms-2`}
      >
        <span>{">"}</span>
      </button>
    </div>
  );
}

export default Pagination;
