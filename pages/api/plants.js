import { createPlant } from "../../lib/redis";
import Cors from 'cors'

// Initializing the cors middleware
const cors = Cors({
    methods: ['GET', 'HEAD'],
  })

export default async function handler(req, res) {

    await runMiddleware(req, res, cors); 
    const id = await createPlant(req.body);
    res.status(200).json({ id });
}
