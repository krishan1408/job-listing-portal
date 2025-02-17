import { JSX } from 'react';

import Link from 'next/link';


/**
 * This is the page 
 * @returns {Promise<JSX.Element>}
 */
export default  async function Page(): Promise<JSX.Element> {

  return (
    <div>
      <Link href="/home?page=1">Go to Job Portal</Link>
    </div>
  );
}