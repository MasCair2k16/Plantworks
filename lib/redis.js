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

async function close() {
    if (client.isOpen()) {
        await client.close(process.env.REDIS_URL);
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

/**
 * @description This is a one-time operation that needs to be done whenever the schema changes. 
 * 
 */
export async function createIndex() {
    await connect();
    const repository = new Repository(schema, client);
    await repository.createIndex()
}

/**
 * Query elements
 * @param {*} q 
 * @returns 
 */
export async function searchPlants(q) {
    await connect();
    const repository = new Repository(schema, client);
    const plants = await repository.search()
        .or('name').eq(q)
        .return.all();
    return plants;
  }

export function returnApiUrl(api = '') {

    if (api === 'search') {
        let url = `${process.env.NEXT_PUBLIC_API_URL}/api/search?`;
        if (location.hostname === "localhost" || location.hostname === "127.0.0.1")
            url = '/api/search?';
        return url;
    }

    else if (api === 'add') {
        let url = `${process.env.NEXT_PUBLIC_API_URL}/api/plants`;
        if (location.hostname === "localhost" || location.hostname === "127.0.0.1")
            url = '/api/plants';
        return url;
    }

    else {
        console.log("API CALL DIDNT WORK")
    }

}