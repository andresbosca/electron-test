interface NewProperty {
  type: string;
  imageUrl: string;
  imageAlt: string;
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
  dateAdded: Date;
  leaseValue?: LeaseValue;
  sellValue?: SellValue;
  amenities: Amenity[];
}

interface Property {
  id: number;
  type: string;
  imageUrl: string;
  imageAlt: string;
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
  dateAdded: Date;
  leaseValue?: LeaseValue;
  sellValue?: SellValue;
  amenities: Amenity[];
}

interface LeaseValue {
  rent: string;
  securityDeposit: string;
  leaseDuration: string;
}

interface SellValue {
  value: string;
  securityDeposit: string;
}

interface Amenity {
  name: string;
  value: boolean;
}

const AMENITIES: Amenity[] = [
  { name: 'Ar Condicionado', value: false },
  { name: 'Sótão', value: false },
  { name: 'Piscina', value: false },
  { name: 'Churrasqueira', value: false },
  { name: 'Jardim', value: false },
  { name: 'Cozinha', value: false },
  { name: 'Lareira', value: false },
  { name: 'Garagem', value: false },
  { name: 'Elevador', value: false },
  { name: 'Portaria', value: false },
  { name: 'Segurança', value: false },
  { name: 'Cerca Elétrica', value: false },
  { name: 'Alarme', value: false },
  { name: 'Câmeras', value: false },
  { name: 'Internet', value: false },
  { name: 'TV a Cabo', value: false },
  { name: 'Área de Serviço', value: false },
  { name: 'Acesso de Cadeira de Rodas', value: false },
  { name: 'Microondas', value: false },
  { name: 'Porão', value: false },
];

const INITIAL_LEASE_VALUE: LeaseValue = {
  rent: '0',
  securityDeposit: '0',
  leaseDuration: '0',
};

const INITIAL_SELL_VALUE: SellValue = {
  value: '0',
  securityDeposit: '0',
};

const INITITAL_STATE: NewProperty = {
  type: '',
  imageUrl: '',
  imageAlt: '',
  name: '',
  address: '',
  number: 0,
  city: '',
  state: '',
  zip: '',
  bedrooms: 0,
  bathrooms: 0,
  squareFeet: 0,
  price: 0,
  garage: 0,
  description: '',
  dateAdded: new Date(),
  leaseValue: INITIAL_LEASE_VALUE,
  sellValue: INITIAL_SELL_VALUE,
  amenities: AMENITIES,
};

export { INITITAL_STATE, INITIAL_LEASE_VALUE, INITIAL_SELL_VALUE, AMENITIES as amenities };

export type { NewProperty, Property, LeaseValue, SellValue, Amenity };
