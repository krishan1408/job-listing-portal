"use client";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import { JSX } from "react";
import Link from "next/link";
import Image from "next/image";
import DOMPurify from "dompurify";

import { IJobData } from "@/interface";

interface IJobDetailsModalProps {
  job: IJobData
  onClose: () => void;
}

/**
 * This component is used to show the job details in a modal
 * @param {IJobDetailsModalProps} props
 * @returns {JSX.Element} 
 */
export const JobDetailsModal=({
  job,
  onClose,
}: IJobDetailsModalProps): JSX.Element =>{
  const sanitizedHTML = DOMPurify.sanitize(job.description);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="p-4 sm:p-6 border rounded-lg shadow-lg bg-white  relative m-2">
        <p className="text-center text-lg font-bold mb-6">Job Details</p>
        <div className="overflow-y-auto w-auto sm:w-[700px] h-auto sm:h-[500px] ">
        <h1 className="text-base mb-2">
        <strong>Job title :-</strong>
          {job?.title}</h1>
        <h2 className="text-base mb-2">
          <strong>Company Name :-</strong>
          {job?.company_name}
        </h2>
        <p className="mb-2 text-base">
          <strong>Location :-</strong>
          {job?.location}
        </p>
        <div>
          <p >
            <strong>Descripation</strong>
          </p>
          <div className="h-[300px] overflow-y-auto">
          <ReactMarkdown rehypePlugins={[rehypeRaw, rehypeSanitize]}>
            {sanitizedHTML}
          </ReactMarkdown>
          </div>
        </div>
        <Link
          href={job.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-blue-500 text-sm"
        >
          View Job Posting
        </Link>

        </div>
        <div  className="absolute top-4 right-6 cursor-pointer" onClick={onClose}>
        <Image width="20" height="20" src="https://img.icons8.com/emoji/48/cross-mark-emoji.png" alt="cross-mark-emoji"/>
        </div>

      </div>
    </div>
  );
}
export default JobDetailsModal;
