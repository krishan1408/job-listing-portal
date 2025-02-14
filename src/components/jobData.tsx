"use client";

import { useState, useEffect } from "react";
import JobCard from "./jobCard";
import Pagination from "./pagiation";
import { IApiResponse, IJobData } from "@/app/page";


interface IJobDataProps {
  jobData: IApiResponse
}

/**
 * This component is used to show the job data
 * @param {IJobDataProps} props 
 * @returns 
 */
export const JobData = ({ jobData }: IJobDataProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<"all" | "remote" | "onsite">(
    "all"
  );
  const [filteredJobs, setFilteredJobs] = useState<IJobData[]>(
    jobData?.data || []
  );
  const jobsPerPage = 10; // Number of jobs per page

  // Filter jobs based on search term and remote/onsite filter
  useEffect(() => {
    let filtered = jobData?.data || [];

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (job) =>
          job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.company_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by remote/onsite
    if (filterType === "remote") {
      filtered = filtered.filter((job) => job.remote);
    } else if (filterType === "onsite") {
      filtered = filtered.filter((job) => !job.remote);
    }

    setFilteredJobs(filtered);
    setCurrentPage(1); // Reset to the first page when filters change
  }, [searchTerm, filterType, jobData]);

  // Paginate jobs
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  // Handle page change
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="space-y-6">
      {/* Search and Filter Container */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search jobs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-3/4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Remote/On-site Filter Dropdown */}
        <select
          value={filterType}
          onChange={(e) =>
            setFilterType(e.target.value as "all" | "remote" | "onsite")
          }
          className="w-full md:w-1/4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Jobs</option>
          <option value="remote">Remote Jobs</option>
          <option value="onsite">On-site Jobs</option>
        </select>
      </div>
      {currentJobs.length === 0 && <div className="text-center ">
        No Jobs Found
        </div>}

      {/* Job List */}
      <div className="grid grid-cols-1 gap-4">

        
        {currentJobs.map((job:IJobData,index:number) => (
          <JobCard key={`${job.id} - ${index}`} job={job} />
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        jobsPerPage={jobsPerPage}
        totalJobs={filteredJobs.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default JobData;
