import Head from 'next/head';
import { useEffect, useState } from 'react';
import router from 'next/router';
import SidebarWithHeader from '../components/SideBar';
import HomeList from '../components/MainList/homeList';

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
        <title>Home - Buscar imóvel</title>
      </Head>
      <HomeList />
    </SidebarWithHeader>
  );
};

export default Home;
