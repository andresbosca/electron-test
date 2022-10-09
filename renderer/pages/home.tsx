import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SvgIcon from '../components/SvgIcon/SvgIcon';
import { FaThLarge } from 'react-icons/fa';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Home - Nextron (with-typescript)</title>
      </Head>
      <div>
        <div>
          <div style={{ backgroundColor: 'blueviolet', borderRadius: 12, display: 'inline-block' }}>
            <img
              style={{ width: 40, padding: '3px 4px 0px 4px' }}
              src="/images/logo.png"
              alt="Nextron"
            />
          </div>
          <h1>AppName</h1>
        </div>
        <div
          style={{
            display: 'flex',
            backgroundColor: 'purple',
            width: '200px',
            height: 'auto',
            borderRadius: '18px',
          }}
        >
          <SvgIcon
            style={{ padding: 29 }}
            link="/newProperty"
            Icon={FaThLarge}
            height={25}
            width={25}
          />
          <h1>Título</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
