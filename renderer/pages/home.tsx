import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SvgIcon from '../components/SvgIcon/SvgIcon';
import Menu from '../public/icons/menu.svg';
import { FaThLarge } from 'react-icons/fa';

const Home : React.FC = () => {
  return (
    <div>
      <Head>
        <title>Home - Nextron (with-typescript)</title>
      </Head>
      <div>
        <SvgIcon Icon={FaThLarge}/>
        <p>
          ⚡ Electron + Next.js he ⚡ -
          <Link href="/next">
            <a>Go to next page</a>
          </Link>
        </p>
        <img src="/images/logo.png" />
      </div>
    </div>
  );
};

export default Home;
