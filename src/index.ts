import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./Routes/test";
import { NotFoundError } from "./Utils/errors";
import { errorHandler } from "./Middlewares/error-handler";

dotenv.config();

const app: Application = express();

mongoose.connect(process.env.MONGO_URI!);

// Middleware: Enable CORS, secure headers, and parse JSON
app.use(cors({ origin: "*" }));
app.use(helmet());
app.use(express.json());

// Routes
app.use("/checklist", router);

// Handle 404 - Route not found
app.all("*", (req: Request, res: Response, next: NextFunction) => {
    next(new NotFoundError());
});

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});
