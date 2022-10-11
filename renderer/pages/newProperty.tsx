import {
  Box,
  Container,
  Divider,
  Flex,
  HStack,
  Input,
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
      <Head>
        <title>Add Property</title>
      </Head>
      <Container borderWidth="1px" maxW="container.xl" backgroundColor="gray.200" centerContent>
        <Box padding="20px">
          <Text fontSize="5xl">Adicionar Imóvel</Text>
          <Divider orientation="horizontal" />
          <Box bg="red">
            <HStack {...group} alignItems="center">
              {options.map((values) => {
                const radio = getRadioProps({ value: values.value });
                return (
                  <Categories key={values.value} {...radio}>
                    <div>{values.image}</div>
                  </Categories>
                );
              })}
            </HStack>
          </Box>
          <Input
            type="text"
            value={property.name}
            placeholder="Nome do Imóvel"
            onChange={(e) => setProperty({ ...property, name: e.target.value })}
          />
          <Input type="text" />
        </Box>
      </Container>
    </SidebarWithHeader>
  );
};
//http://preview.themeforest.net/item/realdeal-real-estate-react-template/full_screen_preview/26673743?_ga=2.76878610.683935755.1663884595-936946968.1663884595
export default NewProperty;
