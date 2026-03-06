import Express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { routes } from "./routes/routes.js";

dotenv.config()

const server = Express();

server.use(cors());
server.use(json());
server.use(routes);


server.listen(process.env.PORT, () => {
    console.log("Serve is running")
})