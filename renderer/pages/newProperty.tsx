import {
  Box,
  Container,
  Divider,
  Flex,
  HStack,
  Stack,
  Text,
  useRadioGroup,
} from '@chakra-ui/react';
import Head from 'next/head';
import { useRef, useState } from 'react';
import Categories from '../components/Categories/Categories';
import SidebarWithHeader from '../components/SideBar';

interface NewPropertyProps {
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  price: number;
  description: string;
}

const INITITAL_STATE: NewPropertyProps = {
  name: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  bedrooms: 0,
  bathrooms: 0,
  squareFeet: 0,
  price: 0,
  description: '',
};

interface Option {
  value: string;
  image: string;
}

const options: Option[] = [
  { value: 'Venda', image: 'Para Venda' },
  { value: 'Aluguel', image: 'Para Alugar' },
];

const NewProperty: React.FC = () => {
  const [property, setProperty] = useState<NewPropertyProps>(INITITAL_STATE);
  const [radioValue, setRadioValue] = useState<string>('');

  const bedOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const bathOptions = [1, 2, 3, 4, 5];
  const parkingOptions = [1, 2, 3];

  const bedroomsRef = useRef<HTMLInputElement>(null);
  const bathroomsRef = useRef<HTMLInputElement>(null);
  const interiorSizeRef = useRef<HTMLInputElement>(null);
  const parkingRef = useRef<HTMLInputElement>(null);

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    defaultValue: 'Venda',
    onChange: setRadioValue,
  });

  console.log(radioValue);

  const group = getRootProps();

  return (
    <SidebarWithHeader>
      <Container maxW="container.xl" backgroundColor="gray.300" centerContent>
        <Head>
          <title>Add Property</title>
        </Head>
        <Box padding="50px">
          <Text fontSize={'5xl'}>Adicionar Imóvel</Text>
          <Stack direction="row" h="25px" p={1}>
            <Divider orientation="horizontal" />
          </Stack>
          <Box p="6">
            <Flex {...group}>
              {options.map((values) => {
                const radio = getRadioProps({ value: values.value });
                return (
                  <Categories key={values.value} {...radio}>
                    <div>{values.image}</div>
                  </Categories>
                );
              })}
            </Flex>
          </Box>
          <Box backgroundColor="red">
            <Text fontSize={'2xl'}>Informações do Imóvel</Text>
            <Stack direction="row" h="100px" p={4} backgroundColor="black">
              <Divider orientation="vertical" />
              <Text align="left">Nome do Imóvel</Text>
              <input
                type="text"
                value={property.name}
                onChange={(e) => setProperty({ ...property, name: e.target.value })}
              />
            </Stack>
          </Box>
        </Box>
      </Container>
    </SidebarWithHeader>
  );
};
//http://preview.themeforest.net/item/realdeal-real-estate-react-template/full_screen_preview/26673743?_ga=2.76878610.683935755.1663884595-936946968.1663884595
export default NewProperty;
