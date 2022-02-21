import { searchPlants } from '../../lib/redis';

export default async function handler(req, res) {
  const q = req.query.q;
  const plants = await searchPlants(q);
  res.status(200).json({ plants });
}