"use client";
import { useState, useEffect } from "react";

interface PaginationProps {
  jobsPerPage: number;
  totalJobs: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

export default function Pagination({ jobsPerPage, totalJobs, paginate, currentPage }: PaginationProps) {
  const [isMobile, setIsMobile] = useState(false);
  const totalPages = Math.ceil(totalJobs / jobsPerPage);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // Adjust breakpoint as needed
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getPageNumbers = () => {
    if (isMobile) {
      return [1, 2, 3, 4, 5, "...", totalPages];
    }
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  };

  return (
    <nav className="mt-4 flex justify-end">
      <ul className="flex space-x-2">
        {getPageNumbers().map((number, index) => (
          <li key={index}>
            {typeof number === "number" ? (
              <button
                onClick={() => paginate(number)}
                className={`px-4 py-2 ${currentPage === number ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              >
                {number}
              </button>
            ) : (
              <span className="px-4 py-2">...</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
