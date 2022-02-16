import { createPlant } from "../../lib/redis";
import Cors from 'cors'

// Initializing the cors middleware
const cors = Cors({
    methods: ['GET', 'HEAD'],
  })

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
      fn(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result)
        }
  
        return resolve(result)
      })
    })
  }

export default async function handler(req, res) {

    // Run the middleware
    await runMiddleware(req, res, cors)

    const id = await createPlant(req.body);
    res.status(200).json({ id });
}
