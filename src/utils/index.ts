export function timeAgo(timestamp:number) {
    const seconds = Math.floor(Date.now() / 1000) - timestamp;
    
    const intervals = [
      { label: "y", seconds: 31536000 }, // 1 year = 365 days
      { label: "m", seconds: 2592000 }, // 1 month = 30 days
      { label: "w", seconds: 604800 }, // 1 week = 7 days
      { label: "d", seconds: 86400 }, // 1 day = 24 hours
      { label: "h", seconds: 3600 }, // 1 hour = 60 minutes
    ];
  
    for (const interval of intervals) {
      const count = Math.floor(seconds / interval.seconds);

      if (count >= 1) {
        return `${count}${interval.label}`;
      }
    }
  
    return "Just now"; // Less than an hour
  }

   // Get page number from URL
   export function getPageFromUrl(url: string): number {
    try {
      const parsedUrl = new URL(url);
      const pageParam = parsedUrl.searchParams.get("page");

      // Convert to a number and ensure it's a valid positive integer
      const page = pageParam ? parseInt(pageParam, 10) : 1;
      return Number.isNaN(page) || page < 1 ? 1 : page;
    } catch (error) {
      console.error("Something went worng while parsing the URL",error);
      return 1; // Default to page 1 if the URL is invalid
    }
  }
  
  