import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(
    cors({
        origin: "*",
    }),
);

app.all("*", (req, res) => {
    res.send("Hello world\n");
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}...`);
});
