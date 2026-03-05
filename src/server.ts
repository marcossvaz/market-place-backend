import Express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { routes } from "./routes/routes.js";


const server = Express();

server.use(routes);
server.use(cors());

server.use(json());


server.listen(process.env.PORT, () => {
    console.log("Serve is running")
})