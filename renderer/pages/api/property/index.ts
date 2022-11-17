import { NextApiRequest, NextApiResponse } from 'next';
import { NewProperty } from '../../../domain/property';
import { getPropertiesByType, postProperty, putProperty } from './../../../domain/lib/api';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      const property: NewProperty = req.body;

      console.log(property.sellValue);

      if (property.sellValue.value === '0' && property.sellValue.securityDeposit === '0') {
        property.sellValue = null;
      }

      if (property.leaseValue.rent === '0' && property.leaseValue.securityDeposit === '0') {
        property.leaseValue = null;
      }

      const newProperty = await postProperty(property);

      if (!newProperty) {
        res.status(404).json({ message: 'Property not found' });

        return;
      }

      res.status(200).json(newProperty);
      return;
    }

    if (req.method === 'PUT') {
      const property = req.body;

      const updatedProperty = await putProperty(property);

      if (!updatedProperty) {
        res.status(404).json({ message: 'Property not found' });
        return;
      }

      res.status(200).json(updatedProperty);
      return;
    }

    if (req.method === 'GET') {
      const type = req.query['type']?.toString();
      const filter = req.query['filter']?.toString();

      const properties = await getPropertiesByType(type);

      if (!properties) {
        res.status(200).json([]);
        return;
      }

      res
        .status(200)
        .json(
          properties.filter(
            (property) =>
              filter === '' ||
              filter === null ||
              filter === undefined ||
              property.amenities?.some((a) => a.name.match(filter)) ||
              property.description.includes(filter) ||
              property.address.includes(filter) ||
              property.city.includes(filter) ||
              property.state.includes(filter) ||
              property.name.includes(filter),
          ),
        );
      return;
    }

    res.status(405).json({ message: 'Method not allowed' });
    return;
  } catch (ex) {
    res.status(500).json({ message: 'Internal server error', exception: ex });
  }
}
