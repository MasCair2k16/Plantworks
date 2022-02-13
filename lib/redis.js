import { Client, Entity, Schema, Repository } from 'redis-om'

const client = new Client();

/**
 * @description connects to the database if no connection is present
 */
async function connect() {
    if (!client.isOpen()) {
        await client.open(process.env.REDIS_URL);
    }
}

class Plant extends Entity {}

/**
 * @class PlantRepository
 * @description Describes the Plant entity and its repository
 */
let schema = new Schema(
    Plant,
    {
        name: { type: 'string' },
        type: { type: 'string' },
        description: { type: 'string' },
        image: { type: 'string' }, // image 
        waterFrequency: { type: 'string' }, // daily, weekly, biweekly, monthly
        shade: { type: 'string' }, // full sun, partial shade, partial sun
    },
    {
        dataStructure: 'JSON',
    }
);

export async function createPlant(data) {
    await connect();
    const repository = new Repository(schema, client);
    const plant = repository.createEntity(data);
    const id = await repository.save(plant);
    return id;
}