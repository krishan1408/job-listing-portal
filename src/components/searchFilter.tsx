// app/components/SearchAndFilter.tsx
"use client";

import { JSX } from "react";

interface ISearchAndFilterProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  jobType: 'all' | 'remote' | 'onsite';
  setJobType: (type: 'all' | 'remote' | 'onsite') => void;
}

/**
 * This component is used to search and filter jobs
 * @param {ISearchAndFilterProps} props 
 * @returns {JSX.Element}
 */
export const SearchAndFilter =({ searchTerm, setSearchTerm, jobType, setJobType }: ISearchAndFilterProps): JSX.Element=> {
  return (
    <div className="mb-4">
      <input 
        type="text" 
        placeholder="Search jobs..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        className="border p-2 rounded"
      />
      <select 
        value={jobType} 
        onChange={(e) => setJobType(e.target.value as 'all' | 'remote' | 'onsite')} 
        className="ml-2 border p-2 rounded"
      >
        <option value="all">All</option>
        <option value="remote">Remote</option>
        <option value="onsite">Onsite</option>
      </select>
    </div>
  );
}