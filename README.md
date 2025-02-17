# Job Listing Portal

## Description
Job Listing Portal is a Next.js-based web application that allows users to browse job listings efficiently. It is built with modern web technologies, ensuring a seamless user experience with fast performance.

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
