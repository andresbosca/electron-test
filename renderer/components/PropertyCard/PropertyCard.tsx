import { Badge, Box, Button } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { Property } from '../../domain/property';
import { subDays } from 'date-fns';
import router from 'next/router';

interface PropertyCardProps extends Property {
  type: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  imageUrl,
  imageAlt,
  city,
  bedrooms,
  bathrooms,
  type,
  name,
  price,
  dateAdded,
}) => {
  const stringBedrooms = bedrooms === 1 ? 'quatro' : 'quatros';
  const stringBathrooms = bathrooms === 1 ? 'banheiro' : 'banheiros';
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);

  const handleViewDetails = () => {
    router.push(`/property/${id}`);
  };

  return (
    <Box
      margin={3}
      maxW="sm"
      flexGrow={1}
      width="400px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="auto"
      key={id}
      bg="gray.100"
    >
      <Box position="relative">
        {dateAdded >= subDays(new Date(), 7) && (
          <Badge
            borderRadius="full"
            colorScheme="teal"
            mr={2}
            pr="5px"
            pl="5px"
            zIndex="1"
            position="absolute"
            top="5%"
            left="3%"
          >
            New
          </Badge>
        )}
        <Image src={imageUrl} alt={imageAlt} height="230px" width="400px" />
      </Box>

      <Box p="6">
        <Box alignItems="baseline">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
          >
            {bedrooms} {stringBedrooms} &bull; {bathrooms} {stringBathrooms} &bull; {type} &bull;{' '}
            {city}
          </Box>
        </Box>
        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" noOfLines={1}>
          {name}
        </Box>
        <Box>
          {formattedPrice}
          <Box as="span" color="gray.600" fontSize="sm">
            {type === 'Aluguel' ? '/dia' : ''}
          </Box>
          <Button
            colorScheme="teal"
            variant="outline"
            size="sm"
            float="right"
            onClick={handleViewDetails}
          >
            Ver detalhes
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PropertyCard;
