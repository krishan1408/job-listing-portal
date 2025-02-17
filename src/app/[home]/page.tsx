import axios from "axios";

import JobData from "@/components/jobData";
import { IApiResponse } from "@/interface";

interface IHomeProps {
  searchParams: Promise<{ page: number }>;
}

/**
 * This is the Main page
 * @param {IHomeProps} props
 * @returns
 */
const Home = async ({ searchParams }: IHomeProps) => {
  const searchParamData = await searchParams;

  const API_URL = process.env.API_URL;
  if (!API_URL) {
    throw new Error(
      "Please define the API_URL environment variable inside .env.local"
    );
  }
  const fetchJobs = async () => {
    const res = await axios.get<IApiResponse>(
      `${API_URL}/job-board-api?page=${searchParamData?.page ?? 1}`
    );
    return res.data;
  };
  const jobData = await fetchJobs();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Job Listing Portal
      </h1>
      <JobData jobData={jobData} />
    </div>
  );
};

export default Home;
