"use client";

interface IPaginationProps {
  links:{
    first: string | null;
    last: string | null;
    prev: string | null;
    next: string | null;
  };
  onPaginate: (url: string) => void;
}

export default function Pagination({ links, onPaginate }: IPaginationProps) {

  return (
    <div className="flex justify-between mt-4">
      <button
        onClick={() => links.prev && onPaginate(links.prev)}
        disabled={!links.prev}
        className={`px-4 py-2 bg-blue-500 text-white rounded ${
          !links.prev ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
        }`}
      >
        Previous
      </button>
      <button
        onClick={() => links.next && onPaginate(links.next)}
        disabled={!links.next}
        className={`px-4 py-2 bg-blue-500 text-white rounded ${
          !links.next ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
        }`}
      >
        Next
      </button>
    </div>
  );
}