import { Amenities } from '../data-source/entities/Amenities';
import { Property } from '../data-source/entities/Property';
import { NewProperty } from '../property';
import { getManager } from './getManager';

const getPropertyById = async (id: number) => {
  const manager = await getManager();
  const property = await manager.getRepository(Property).findOne({ where: { id: id } });

  return property;
};

const getPropertiesByType = async (type: string) => {
  const manager = await getManager();
  const properties = await manager
    .getRepository(Property)
    .find({ loadRelationIds: true, where: { type } });

  return properties;
};

const postProperty = async (property: NewProperty) => {
  const manager = await getManager();
  const newProperty = await manager.getRepository(Property).save(property);

  return newProperty;
};

const putProperty = async (property: Property) => {
  const manager = await getManager();
  const updatedProperty = await manager.getRepository(Property).save(property);

  return updatedProperty;
};

const deleteProperty = async (id: number) => {
  const manager = await getManager();
  const property = await manager.getRepository(Property).findOne({ where: { id: id } });

  if (property) {
    await manager.getRepository(Property).remove(property);
  }
};

export { getPropertyById, getPropertiesByType, postProperty, putProperty, deleteProperty };
