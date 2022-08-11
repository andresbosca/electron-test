import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Next : React.FC = () => {
  return (
    <div>
      <Head>
        <title>Next - Nextron (with-typescript)</title>
      </Head>
      <div>
        <p>
          ⚡ Electron + Next.js ⚡ -
          <Link href="/home">
            <a>Go to home page</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Next;
