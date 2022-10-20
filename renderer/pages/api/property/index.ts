import { NextApiRequest, NextApiResponse } from 'next';
import { getPropertiesByType, postProperty, putProperty } from './../../../domain/lib/api';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const property = req.body;

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
    const type = req.query['type'];

    const properties = await getPropertiesByType(type.toString());

    if (!properties) {
      res.status(200).json([]);
      return;
    }

    res.status(200).json(properties);
    return;
  }

  res.status(405).json({ message: 'Method not allowed' });
  return;
}
