import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const maxVisible = isMobile ? 2 : 5;

  if (totalPages <= 1) return null;

  // Calculate visible pages
  const getVisiblePages = () => {
    if (totalPages <= maxVisible)
      return [...Array(totalPages).keys()].map((n) => n + 1);

    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let end = Math.min(totalPages, start + maxVisible - 1);

    if (end - start < maxVisible - 1)
      start = Math.max(1, end - maxVisible + 1);

    return [...Array(end - start + 1).keys()].map((n) => n + start);
  };

  return (
    <div className="flex justify-center items-center space-x-2 py-6">
      {/* Prev */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="cursor-pointer px-3 py-2 bg-gray-100 text-gray-600 rounded-lg disabled:opacity-50 hover:bg-gray-200 transition"
      >
        Prev
      </button>

      {/* Page Numbers */}
      {getVisiblePages().map((num) => (
        <button
          key={num}
          onClick={() => onPageChange(num)}
          className={`cursor-pointer px-3 py-2 rounded-lg transition ${
            currentPage === num
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          {num}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="cursor-pointer px-3 py-2 bg-gray-100 text-gray-600 rounded-lg disabled:opacity-50 hover:bg-gray-200 transition"
      >
        Next
      </button>
    </div>
  );
};

export default PaginationComponent;
