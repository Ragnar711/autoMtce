import { MongoMemoryServer } from "mongodb-memory-server";
import { MongoMemoryServerConfig } from "../Utils/config";

export = async function globalTeardown() {
    if (MongoMemoryServerConfig.Memory) {
        // eslint-disable-next-line
        const instance: MongoMemoryServer = (global as any).__MONGOINSTANCE;
        await instance.stop();
    }
};
