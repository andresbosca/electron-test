interface NewProperty {
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
  leaseValue: LeaseValue;
  amenities: Amenity[];
}

interface LeaseValue {
  rent: string;
  securityDeposit: string;
  leaseDuration: string;
}

interface Amenity {
  name: string;
  value: boolean;
}

const INITITAL_STATE: NewProperty = {
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

const INITIAL_LEASE_VALUE: LeaseValue = {
  rent: '0',
  securityDeposit: '0',
  leaseDuration: '0',
};

const amenities: Amenity[] = [
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

export { INITITAL_STATE, INITIAL_LEASE_VALUE, amenities };

export type { NewProperty, Property, LeaseValue, Amenity };
