import {
  Box,
  Container,
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useRadioGroup,
} from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import { SetStateAction, useState } from 'react';
import Categories from '../components/Categories/Categories';

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

const NewProperty: React.FC = () => {
  const [property, setProperty] = useState<NewPropertyProps>(INITITAL_STATE);
  const [radioValue, setRadioValue] = useState<string>('');

  const options: Option[] = [
    { value: 'Venda', image: '/../public/images/for-rent.svg' },
    { value: 'Aluguel', image: '/../public/images/for-sale.svg' },
  ];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    defaultValue: 'Venda',
    onChange: setRadioValue,
  });

  const group = getRootProps();

  return (
    <Container size={'md'}>
      <Head>
        <title>Add Property</title>
      </Head>
      <Box>
        <Tabs isFitted size="md">
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab>Three</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Box p="6">
                <HStack {...group}>
                  {options.map((values) => {
                    const radio = getRadioProps({ value: values.value });
                    return (
                      <Categories key={values.value} {...radio}>
                        <Image src={values.image} height="200px" width="200px" />
                      </Categories>
                    );
                  })}
                </HStack>
              </Box>
            </TabPanel>
            <TabPanel>
              <p>Yeah yeah. What's up?</p>
            </TabPanel>
            <TabPanel>
              <p>Oh, hello there.</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};
//http://preview.themeforest.net/item/realdeal-real-estate-react-template/full_screen_preview/26673743?_ga=2.76878610.683935755.1663884595-936946968.1663884595
export default NewProperty;
