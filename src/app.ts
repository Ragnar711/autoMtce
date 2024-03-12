import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import { errorHandler } from "./Middlewares/error-handler";
import { NotFoundError } from "./Utils/errors";
import router from "./Routes/checklist-routes";

export const start = () => {
    const app: Application = express();

    mongoose.connect(process.env.MONGO_URI ?? "");

    // Middleware: Enable CORS, secure headers, and parse JSON
    app.use(cors({ origin: "*" }));
    app.use(helmet());
    app.use(express.json());

    // Routes
    app.use("/checklist", router);

    // Handle 404 - Route not found
    app.all("*", (req, res, next) => {
        next(new NotFoundError());
    });

    app.use(errorHandler);

    return app;
};
