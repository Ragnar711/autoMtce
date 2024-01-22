import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import { MongoMemoryServerConfig } from "../Utils/config";

export = async function globalSetup() {
    try {
        if (MongoMemoryServerConfig.Memory) {
            const instance = await MongoMemoryServer.create();
            const uri = instance.getUri();
            // eslint-disable-next-line
            (global as any).__MONGOINSTANCE = instance;
            process.env.MONGO_URI = uri.slice(0, uri.lastIndexOf("/"));
        } else {
            process.env.MONGO_URI = `mongodb://${MongoMemoryServerConfig.IP}:${MongoMemoryServerConfig.Port}`;
        }

        await mongoose.connect(
            `${process.env.MONGO_URI}/${MongoMemoryServerConfig.Database}`,
        );

        await mongoose.connection.dropDatabase();
        await mongoose.connection.close();
    } catch (err) {
        console.error("Error in globalSetup:", err);
        process.exit(1);
    }
};
