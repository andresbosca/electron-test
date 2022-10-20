import { NextApiRequest, NextApiResponse } from 'next';
import { deleteProperty, getPropertyById } from './../../../domain/lib/api';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const id = Number.parseInt(req.query['id'].toString().toString()); // 4

    const property = await getPropertyById(id);

    if (!property) {
      res.status(404).json({ message: 'Property not found' });
      return;
    }

    res.status(200).json(property);
    return;
  }

  if (req.method === 'DELETE') {
    const { id } = req.query;

    await deleteProperty(Number.parseInt(id[0]));

    res.status(200).json({ message: 'Property deleted' });
    return;
  }

  // res.status(405).json({ message: 'Method not allowed' });
}
