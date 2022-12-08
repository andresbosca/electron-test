import { Badge, Box, Button, Flex, Image } from '@chakra-ui/react';
import Head from 'next/head';
import router from 'next/router';
import { useEffect, useState } from 'react';
import { FaBath, FaBed, FaCar, FaSquare } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import SidebarWithHeader from '../../components/SideBar';
import { getHouseData } from '../../domain/getListData';
import { Property } from '../../domain/property';

const Details = () => {
  const [property, setProperty] = useState<Property>(null);

  const id = Number.parseInt(window?.location?.pathname?.substring(10));

  useEffect(() => {
    const getProperty = async () => {
      const data = await getHouseData(id);
      setProperty(data);
    };

    getProperty();
  }, [getHouseData, setProperty, id]);

  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
    .format(property?.price)
    .concat(property?.leaseValue ? ' /mês' : '');

  return (
    <SidebarWithHeader>
      <Head>
        <title>Detalhes do imóvel</title>
      </Head>
      <Box>
        <Box
          textAlign="center"
          fontSize="5xl"
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {property?.name}
        </Box>
      </Box>
      <Flex justifyContent="space-evenly">
        <Box height="400px" maxWidth="600px" p="5">
          <Carousel>
            {property?.images?.map((image) => {
              return (
                <Image
                  borderRadius="8px"
                  src={image.url}
                  alt={image.alt}
                  height="400px"
                  maxWidth="600px"
                />
              );
            })}
          </Carousel>
        </Box>
        <Flex flexDir="column" mt="1.25rem">
          <Box>
            <Box textAlign="center" fontSize="2xl">
              {`${property?.address}, ${property?.number} - ${property?.state} - ${property?.city}`}
            </Box>

            <Box textAlign="center" fontSize="2xl">
              {property?.description}
            </Box>

            <Box alignItems="center" fontSize="2xl">
              <Box>
                <Flex flexDir="row" alignItems="center" justifyContent="center">
                  <FaBed />
                  <Box pl="1rem">{property?.bedrooms} quartos</Box>
                </Flex>
              </Box>

              <Box textAlign="center" fontSize="2xl">
                <Flex flexDir="row" alignItems="center" justifyContent="center">
                  <FaBath />
                  <Box pl="1rem">{property?.bathrooms} banheiros</Box>
                </Flex>
              </Box>
            </Box>

            <Box textAlign="center" fontSize="2xl">
              <Flex flexDir="row" alignItems="center" justifyContent="center">
                <FaSquare />
                <Box pl="1rem">{property?.squareFeet} m²</Box>
              </Flex>

              <Flex flexDir="row" alignItems="center" justifyContent="center">
                <FaCar />
                <Box pl="1rem">{property?.garage} vagas</Box>
              </Flex>
            </Box>
          </Box>

          <Box p="5">
            <Box maxW="400px">
              {property?.amenities?.map((amenity) => {
                return (
                  <Badge
                    key={amenity.name}
                    borderRadius="3"
                    textTransform="uppercase"
                    colorScheme="teal"
                    fontWeight="bold"
                    mr={2}
                    ps="5px"
                    mt="5px"
                    fontSize="xs"
                  >
                    {amenity.name}
                  </Badge>
                );
              })}
            </Box>
            <Box
              textAlign="center"
              fontSize="2xl"
              mt="5rem"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              noOfLines={1}
            >
              <div>
                {formattedPrice}
                <Button
                  colorScheme="teal"
                  variant="solid"
                  size="sm"
                  ml="4"
                  onClick={() => {
                    console.log('oi');
                    router.push('/devs');
                  }}
                >
                  Entre em contato
                </Button>
              </div>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </SidebarWithHeader>
  );
};

export default Details;
