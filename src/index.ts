import dotenv from "dotenv";
import { start } from "./app";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = start();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});
