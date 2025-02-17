"use client";

import React, { JSX, useState } from "react";
import Image from "next/image";

import { timeAgo } from "@/utils";
import { IJobData } from "@/interface";

import JobDetailsModal from "./jobDetailModal";

interface IJobCardProps {
  job: IJobData;
}

/**
 * This component is used to show the job card
 * @param {IJobCardProps} props
 * @returns {JSX.Element}
 */
export const JobCard = ({ job }: IJobCardProps): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="border p-4 rounded-lg shadow-sm">
      <div className="flex justify-between items-center ">
        <div className="sm:w-1/2">
          <div className="flex items-center ">
            <Image
              width="20"
              className="mr-2"
              height="20"
              src="https://img.icons8.com/officel/80/new-job.png"
              alt="new-job"
            />
            <h2 className="text-sm font-semibold">{job.title}</h2>
          </div>
          <div className="flex items-center ">
            <Image
              width="20"
              height="20"
              className="mr-2"
              src="https://img.icons8.com/dusk/64/company.png"
              alt="company"
            />
            <p className="text-sm text-gray-600">{job.company_name}</p>
          </div>
        </div>
        <div className="w-1/2 hidden sm:flex justify-between items-center  p-2 rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              {job?.job_types?.map((type) => (
                <span
                  key={type}
                  className="inline-block mt-2 px-2 text-xs font-semibold rounded mr-2 bg-green-200 text-black"
                >
                  {type}
                </span>
              ))}
            </div>
            <div>
              {job?.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block mt-2 px-2 text-xs font-semibold bg-yellow-200 rounded mr-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="text-sm flex justify-between items-center">
            <div className="flex items-center ">
              <Image
                width="20"
                height="20"
                src="https://img.icons8.com/color/48/map-marker--v1.png"
                alt="map-marker--v1"
              />
              <p className="mr-4">{job.location}</p>
            </div>
            <p className="text-black">{timeAgo(job?.created_at)}</p>
          </div>
        </div>
      </div>
      <div className="flex sm:hidden justify-between items-center p-2 rounded-lg">
        <div className="flex flex-col justify-start items-start">
          <div>
            {job?.job_types?.map((type) => (
              <span
                key={type}
                className="inline-block mt-2 px-2 text-xs font-semibold rounded mr-2 bg-green-200 text-black"
              >
                {type}
              </span>
            ))}
          </div>
          <div>
            {job?.tags?.map((tag, index) => (
              <span
                key={index}
                className="inline-block mt-2 px-2 text-xs font-semibold bg-yellow-200 rounded mr-2"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="text-sm flex justify-between items-center">
          <div className="flex items-center ">
            <Image
              width="20"
              height="20"
              src="https://img.icons8.com/color/48/map-marker--v1.png"
              alt="map-marker--v1"
            />
            <p className="mr-4">{job.location}</p>
          </div>
          <p className="text-black">{timeAgo(job?.created_at)}</p>
        </div>
      </div>

      <button
        onClick={() => setIsModalOpen(true)}
        className=" text-blue-500 text-xs"
      >
        View Details
      </button>
      {isModalOpen && (
        <JobDetailsModal job={job} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};
export default JobCard;
