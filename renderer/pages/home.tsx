import Head from 'next/head';
import SvgIcon from '../components/SvgIcon/SvgIcon';
import { FaThLarge } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import router from 'next/router';
import SidebarContent from '../components/SideBar/SideBarContent';
import SidebarWithHeader from '../components/SideBar';

const Home: React.FC = () => {
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    setToken(localStorage.getItem('token'));
    if (token === null) {
      router.push('/login');
    }
  }, [token]);

  return (
    <SidebarWithHeader>
      <Head>
        <title>Home - Nextron (with-typescript)</title>
      </Head>
    </SidebarWithHeader>
  );
};

export default Home;
