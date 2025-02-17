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
  

