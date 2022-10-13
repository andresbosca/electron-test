import { Box, Button, Container, Grid, Stack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { getListData } from '../../domain/getListData';
import { Property } from '../../domain/property';
import PropertyCard from '../PropertyCard/PropertyCard';

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const ListCard: React.FC = () => {
  const [list, setList] = useState<Property[]>([]);
  const [loadingForSale, setLoadingForSale] = useState<boolean>(false);
  const [loadingForRent, setLoadingForRent] = useState<boolean>(true);
  const [type, setType] = useState<string>('Para alugar');

  useEffect(() => {
    handleSearchForRent();
  }, []);

  const handleSearchForRent = async () => {
    setType('Para alugar');
    setLoadingForRent(true);
    const list = await getListData(type);
    await sleep(400);
    setList(list);
    setLoadingForRent(false);
  };
  const handleSearchForSale = async () => {
    setType('Para comprar');
    setLoadingForSale(true);
    const list = await getListData(type);
    await sleep(400);
    setList(list);
    setLoadingForSale(false);
  };

  return (
    <Container borderWidth="1px" maxW="container.xl" backgroundColor="gray.200" borderRadius="lg">
      <Stack justifyContent="center" direction="row" spacing={4} mt={5}>
        <Button
          isLoading={loadingForRent}
          colorScheme="blue"
          onClick={handleSearchForRent}
          variant="solid"
        >
          Para alugar
        </Button>
        <Button
          isLoading={loadingForSale}
          colorScheme="blue"
          onClick={handleSearchForSale}
          variant="solid"
        >
          Para comprar
        </Button>
      </Stack>

      {loadingForSale || loadingForRent ? (
        <Box mt={5} textAlign="center">
          Carregando...
        </Box>
      ) : (
        <Box display="flex" flexWrap="wrap">
          {list.map((item) => (
            <PropertyCard {...item} key={item.id} />
          ))}
        </Box>
      )}
    </Container>
  );
};

export default ListCard;
