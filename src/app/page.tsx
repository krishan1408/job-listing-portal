import axios from 'axios';

import JobData from '@/components/jobData';
import { JSX } from 'react';

export interface IJobData {
  id:string;
  slug: string;
  company_name: string;
  title: string;
  description: string;
  remote: boolean;
  url: string;
  tags: string[];
  job_types: string[];
  location: string;
  created_at: number;
}

interface ILinks {
  first: string | null;
  last: string | null;
  prev: string | null;
  next: string | null;
}

interface IMeta {
  current_page: number;
  from: number;
  path: string;
  per_page: number;
  to: number;
  terms: string;
  info: string;
}

export interface IApiResponse {
  data: IJobData[];
  links: ILinks;
  meta: IMeta;
}

/**
 * This is the Main page 
 * @returns {Promise<JSX.Element>}
 */
export default  async function Home(): Promise<JSX.Element> {
    const fetchJobs = async () => {
      const res = await axios.get<IApiResponse>(`${process.env.NEXT_PUBLIC_API_URL}/job-board-api`);
      return res.data;
    };
    const jobData = await fetchJobs();
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Job Listing Portal</h1>
      <JobData jobData={jobData}/>
    </div>
  );
}