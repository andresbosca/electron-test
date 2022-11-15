import { Box, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { Property } from '../../domain/property';
import { getHouseData } from '../../domain/getListData';
import Link from 'next/link';

const Details = () => {
  const [property, setProperty] = useState<Property>(null);

  const id = Number.parseInt(window.location.pathname.substring(10));

  const getProperty = async () => {
    const data = await getHouseData(id);
    setProperty(data);
  };
  return (
    <Box>
      <Text>Details</Text>
      <Link href="/home">home</Link>
    </Box>
  );
};

export default Details;
