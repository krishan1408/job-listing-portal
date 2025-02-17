# Job Listing Portal

## Description
The Job Listing Portal is a web application built using Next.js with TypeScript, styled with Tailwind CSS. This platform allows users to explore various job listings efficiently, thanks to the combination of server-side and client-side rendering for enhanced performance. Key features include:

- **Pagination**: Seamlessly browse through a large number of job listings with pagination.
- **Searchbar**: Easily search for jobs by title, company, or location.
- **Filters**: Narrow down job listings based on specific criteria like job type, salary range, and experience level.
- **Job Details View**: A dedicated page to view all the essential details about a specific job posting.

This project leverages both **server components** for optimized loading times and **client components** for dynamic interactivity, ensuring a smooth user experience.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Package Manager:** pnpm
- **Node.js Version:** 22
- **pnpm Version:** 10.4.0

## Technologies Used
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript

## Getting Started

### Clone the Repository
To get started, clone this repository using the following command:

```sh
git clone <https://github.com/krishan1408/job-listing-portal.git>
```

```bash
cd job-listing-portal
```

```bash
pnpm install
```

### Add env var in .env file

```
API_URL=<your-api-url>
```

First, run the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- **`pnpm dev`**: Start the development server.  
- **`pnpm build`**: Build the project for production.  
- **`pnpm start`**: Start the production server.  


## Project Structure

```
job-listing-portal/
├── src/
│   ├── app/
│   │   ├── page.tsx             # Main page (Server Component)
│   ├── components/
│   │   ├── JobCard.tsx          # Job card component
│   │   ├── JobDetailsModal.tsx  # Job details modal
│   │   ├── Pagination.tsx       # Pagination component
│   ├── utils/
│   │   ├── index.ts             # Utility functions
├── public/                      # Static assets
├── .env.local                    # Environment variables
├── tailwind.config.js            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
├── package.json                  # Project dependencies
```


## Deploy on Vercel

Check check :- [job listig portal website](https://job-listing-portal-mocha.vercel.app) 
