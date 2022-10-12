import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  Grid,
  GridItem,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useRadioGroup,
} from '@chakra-ui/react';
import Head from 'next/head';
import router from 'next/router';
import { useState } from 'react';
import {
  FaDollarSign,
  FaFileInvoiceDollar,
  FaHouseUser,
  FaMapMarkedAlt,
  FaTree,
} from 'react-icons/fa';
import Categories from '../components/Categories/Categories';
import SidebarWithHeader from '../components/SideBar';
import brazilStates from '../domain/brazilStates';
import formatCep from '../domain/cepFormatter';

interface NewPropertyProps {
  name: string;
  address: string;
  number: number;
  city: string;
  state: string;
  zip: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  price: number;
  garage: number;
  description: string;
}

const INITITAL_STATE: NewPropertyProps = {
  name: '',
  address: '',
  number: null,
  city: '',
  state: '',
  zip: '',
  bedrooms: null,
  bathrooms: null,
  squareFeet: null,
  price: null,
  garage: null,
  description: '',
};

interface LeaseValue {
  rent: string;
  securityDeposit: string;
  leaseDuration: string;
}

const INITIAL_LEASE_VALUE: LeaseValue = {
  rent: '0',
  securityDeposit: '0',
  leaseDuration: '0',
};

interface Amenity {
  name: string;
  value: boolean;
}

const amenities: Amenity[] = [
  { name: 'Air Conditioning', value: false },
  { name: 'Attic', value: false },
  { name: 'Balcony', value: false },
  { name: 'Basement', value: false },
  { name: 'Cable Ready', value: false },
  { name: 'Ceiling Fan(s)', value: false },
  { name: 'Dishwasher', value: false },
  { name: 'Fireplace', value: false },
  { name: 'Furnished', value: false },
  { name: 'Garbage Disposal', value: false },
  { name: 'Hardwood Floors', value: false },
  { name: 'Microwave', value: false },
  { name: 'New / Renovated Interior', value: false },
  { name: 'Oversized Closets', value: false },
  { name: 'Pool', value: false },
  { name: 'Security System', value: false },
  { name: 'Smoke Free', value: false },
  { name: 'Some Paname Utilities', value: false },
  { name: 'Washer / Dryer In Unit', value: false },
  { name: 'Wheelchair Access', value: false },
  { name: 'Yard', value: false },
];

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
  const [lease, setLease] = useState<LeaseValue>(INITIAL_LEASE_VALUE);
  const [amenitiesState, setAmenitiesState] = useState<Amenity[]>(amenities);
  const [buttonPressed, setButtonPressed] = useState(false);
  const [leaseState, setLeaseState] = useState(false);
  const [radioValue, setRadioValue] = useState<string>('');

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Formulário válido');
      console.log(property);
      router.push('/home');
    }
    setButtonPressed(true);
    console.log(property);
    console.log(buttonPressed);
    console.log('BAAAD');
  };

  const handleRadioChange = (value: string) => {
    setRadioValue(value);
    setLeaseState(false);
    if (value === 'Aluguel') {
      setLeaseState(true);
    }
  };

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    defaultValue: 'Venda',
    onChange: handleRadioChange,
  });

  const group = getRootProps();

  const isStateValid =
    brazilStates.map((state) => state.abbreviation).includes(property.state) ||
    brazilStates.map((state) => state.name).includes(property.state);

  const isZipValid = property.zip.length === 9 && property.zip.includes('-');

  const validateForm = () => {
    if (
      property.name === '' ||
      property.address === '' ||
      property.city === '' ||
      !isStateValid ||
      !isZipValid ||
      property.description === ''
    ) {
      return false;
    }

    return true;
  };

  return (
    <SidebarWithHeader>
      <Head>
        <title>Add Property</title>
      </Head>
      <Container
        borderWidth="1px"
        maxW="container.xl"
        backgroundColor="gray.200"
        textAlign="center"
        borderRadius="lg"
      >
        <Box padding="20px">
          <Text fontSize="5xl">Adicionar Imóvel</Text>
          <Divider orientation="horizontal" />
          <Box>
            <HStack {...group} justifyContent="center">
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
          <Grid
            marginTop="10"
            h="170px"
            templateRows="repeat(4,1fr)"
            templateColumns="repeat(12, 1fr)"
            gap={4}
          >
            <GridItem rowSpan={2} colSpan={4} textAlign="left">
              <Box width="min-content">
                <FaHouseUser fontSize="50px" />
              </Box>
              <Text fontSize="2xl">Informações do Imóvel</Text>
            </GridItem>
            <GridItem colSpan={8}>
              <Input
                paddingLeft="10px"
                borderRadius={'md'}
                variant="flushed"
                type="text"
                value={property.name}
                placeholder="Nome do Imóvel"
                _placeholder={{ color: 'gray.500' }}
                bg="gray.100"
                onChange={(e) =>
                  setProperty((state) => {
                    return { ...state, name: e.target.value };
                  })
                }
              />
            </GridItem>
            <GridItem colSpan={2}>
              <Input
                paddingLeft="10px"
                bg="gray.100"
                borderRadius={'md'}
                variant="flushed"
                type="number"
                value={property.bedrooms}
                max={10}
                placeholder="Quartos"
                _placeholder={{ color: 'gray.500' }}
                onChange={(e) =>
                  setProperty((state) => {
                    return { ...state, bedrooms: Number.parseInt(e.target.value) };
                  })
                }
              />
            </GridItem>
            <GridItem colSpan={2}>
              <Input
                paddingLeft="10px"
                bg="gray.100"
                borderRadius={'md'}
                variant="flushed"
                type="number"
                max={5}
                value={property.bathrooms}
                placeholder="Banheiros"
                _placeholder={{ color: 'gray.500' }}
                onChange={(e) =>
                  setProperty((state) => {
                    return { ...state, bathrooms: Number.parseInt(e.target.value) };
                  })
                }
              />
            </GridItem>
            <GridItem colSpan={2}>
              <Input
                paddingLeft="10px"
                bg="gray.100"
                borderRadius={'md'}
                variant="flushed"
                type="number"
                value={property.squareFeet}
                placeholder="Tamanho do interior"
                _placeholder={{ color: 'gray.500' }}
                onChange={(e) =>
                  setProperty((state) => {
                    return { ...state, squareFeet: Number.parseFloat(e.target.value) };
                  })
                }
              />
            </GridItem>
            <GridItem colSpan={2}>
              <Input
                paddingLeft="10px"
                bg="gray.100"
                borderRadius={'md'}
                variant="flushed"
                type="number"
                value={property.garage}
                placeholder="Garagem"
                _placeholder={{ color: 'gray.500' }}
                onChange={(e) =>
                  setProperty((state) => {
                    return { ...state, garage: Number.parseInt(e.target.value) };
                  })
                }
              />
            </GridItem>
          </Grid>
          <Grid h="170px" templateRows="repeat(5,1fr)" templateColumns="repeat(12, 1fr)" gap={4}>
            <GridItem rowSpan={3} colSpan={4} textAlign="left">
              <Box width="min-content">
                <FaMapMarkedAlt fontSize="50px" />
              </Box>
              <Text fontSize="2xl" flex="1">
                Endereço do Imóvel
              </Text>
            </GridItem>
            <GridItem colSpan={2}>
              <Input
                paddingLeft="10px"
                bg="gray.100"
                borderRadius={'md'}
                variant="flushed"
                type="number"
                value={property.zip.replace(/\D/g, '')}
                placeholder="CEP"
                _placeholder={{ color: 'gray.500' }}
                isInvalid={!isZipValid && (property.zip !== '' || buttonPressed)}
                errorBorderColor="red.300"
                onChange={(e) =>
                  setProperty((state) => {
                    return { ...state, zip: formatCep(e.target.value) };
                  })
                }
              />
            </GridItem>
            <GridItem colSpan={2}>
              <Input
                paddingLeft="10px"
                bg="gray.100"
                borderRadius={'md'}
                variant="flushed"
                type="search"
                value={property.city}
                placeholder="Cidade"
                _placeholder={{ color: 'gray.500' }}
                onChange={(e) =>
                  setProperty((state) => {
                    return { ...state, city: e.target.value };
                  })
                }
              />
            </GridItem>
            <GridItem colSpan={2}>
              <Input
                paddingLeft="10px"
                bg="gray.100"
                borderRadius={'md'}
                variant="flushed"
                type="search"
                value={property.state}
                placeholder="Estado"
                _placeholder={{ color: 'gray.500' }}
                isInvalid={!isStateValid && (property.state !== '' || buttonPressed)}
                errorBorderColor="red.300"
                onChange={(e) =>
                  setProperty((state) => {
                    return { ...state, state: e.target.value };
                  })
                }
              />
            </GridItem>
            <GridItem colSpan={6}>
              <Input
                paddingLeft="10px"
                borderRadius={'md'}
                variant="flushed"
                type="text"
                value={property.address}
                placeholder="Endereço"
                _placeholder={{ color: 'gray.500' }}
                bg="gray.100"
                onChange={(e) =>
                  setProperty((state) => {
                    return { ...state, address: e.target.value };
                  })
                }
              />
            </GridItem>
            <GridItem colSpan={2}>
              <Input
                paddingLeft="10px"
                bg="gray.100"
                borderRadius={'md'}
                variant="flushed"
                type="number"
                value={property.number}
                placeholder="Número"
                _placeholder={{ color: 'gray.500' }}
                onChange={(e) =>
                  setProperty((state) => {
                    return { ...state, number: Number.parseInt(e.target.value) };
                  })
                }
              />
            </GridItem>
          </Grid>
          {leaseState && (
            <Grid h="150px" templateRows="repeat(2,1fr)" templateColumns="repeat(18, 1fr)" gap={4}>
              <GridItem rowSpan={2} colSpan={6} textAlign="left">
                <Box width="min-content">
                  <FaFileInvoiceDollar fontSize="50px" />
                </Box>
                <Text fontSize="2xl" flex="1">
                  Locação
                </Text>
              </GridItem>
              <GridItem colSpan={4}>
                <Text fontSize="md" flex="1">
                  Valor do aluguel
                </Text>
              </GridItem>
              <GridItem colSpan={4}>
                <Text fontSize="md" flex="1">
                  Valor do Adiantamento
                </Text>
              </GridItem>
              <GridItem colSpan={4}>
                <Text fontSize="md" flex="1">
                  Duração do contrato
                </Text>
              </GridItem>
              <GridItem colSpan={4}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    fontSize="1.2em"
                    children="$"
                  />
                  <Input
                    bg="gray.100"
                    borderRadius={'md'}
                    variant="flushed"
                    type="text"
                    value={new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(Number.parseFloat(lease.rent?.replace(/\D/g, '')) / 100)}
                    placeholder="Aluguel"
                    _placeholder={{ color: 'gray.500' }}
                    onChange={(e) =>
                      setLease((state) => {
                        return { ...state, rent: e.target.value };
                      })
                    }
                  />
                </InputGroup>
              </GridItem>
              <GridItem colSpan={4}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    fontSize="1.2em"
                    children="$"
                  />
                  <Input
                    bg="gray.100"
                    borderRadius={'md'}
                    variant="flushed"
                    type="text"
                    value={new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(Number.parseFloat(lease.securityDeposit?.replace(/\D/g, '')) / 100)}
                    placeholder="Aluguel"
                    _placeholder={{ color: 'gray.500' }}
                    onChange={(e) =>
                      setLease((state) => {
                        return { ...state, securityDeposit: e.target.value };
                      })
                    }
                  />
                </InputGroup>
              </GridItem>
              <GridItem colSpan={4}>
                <InputGroup>
                  <Input
                    paddingLeft="10px"
                    bg="gray.100"
                    borderRadius={'md'}
                    variant="flushed"
                    type="text"
                    value={lease.leaseDuration}
                    placeholder="Aluguel"
                    _placeholder={{ color: 'gray.500' }}
                    onChange={(e) =>
                      setLease((state) => {
                        return { ...state, leaseDuration: e.target.value };
                      })
                    }
                  />
                </InputGroup>
              </GridItem>
            </Grid>
          )}
          <Divider />
          <Grid h="300px" templateRows="repeat(6,1fr)" templateColumns="repeat(18, 1fr)" gap={4}>
            <GridItem rowSpan={6} colSpan={6} textAlign="left">
              <Box width="min-content">
                <FaTree fontSize="50px" />
              </Box>
              <Text fontSize="2xl" flex="1">
                Facilidades
              </Text>
            </GridItem>

            {amenitiesState.map((amenity) => {
              return (
                <GridItem colSpan={3}>
                  <Checkbox
                    width="sm"
                    colorScheme="green"
                    borderColor="gray.500"
                    textAlign={'left'}
                    defaultChecked={amenity.value}
                    onChange={(e) => {
                      setAmenitiesState((state) => {
                        return state.map((item) => {
                          if (item.name === amenity.name) {
                            return { ...item, checked: e.target.checked };
                          }
                          return item;
                        });
                      });
                    }}
                  >
                    {amenity.name}
                  </Checkbox>
                </GridItem>
              );
            })}
          </Grid>
        </Box>
        <Button marginBottom="5" colorScheme="green" variant="solid" onClick={handleSubmit}>
          <Box paddingRight="8px">Adicionar Imóvel</Box> <FaDollarSign />
        </Button>
      </Container>
    </SidebarWithHeader>
  );
};
//http://preview.themeforest.net/item/realdeal-real-estate-react-template/full_screen_preview/26673743?_ga=2.76878610.683935755.1663884595-936946968.1663884595
export default NewProperty;
