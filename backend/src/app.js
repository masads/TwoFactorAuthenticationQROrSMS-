import express from "express";
import compression from "compression";
import bodyParser from "body-parser";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import fs from 'fs';
import path from 'path';
import auth from './Controller/auth.js'
import user from './Controller/user.js'
import product from './Controller/product.js'
import customMorgan from "./middleware/morgan.js";
import connectMongoDb from "./config/mongoDb.js";
import { protect } from "./middleware/auth.js";
import * as dotenv from "dotenv";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
dotenv.config();

const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.PORT || 9000;

connectMongoDb();
let jsonDataSwagger = fs.readFileSync(path.join(__dirname, '/documentation', 'swagger-output.json'));

//middleware
app.use(cors()); //making cross-domain requests possible
app.use(express.json()); // tells the system that you want json to be used.
app.use(express.urlencoded({ extended: true })); //allow us to attach parameters to a url like(?) etc
app.use(customMorgan); //it does all the loging for us (run server by using "yarn dev" )("dev"->for details goto package.json scripts)
app.use(express.static("public"));
// app.use("/images", express.static("images"));
app.use(compression());

app.use("/api_docs", swaggerUi.serve, swaggerUi.setup(JSON.parse(jsonDataSwagger)));

//openRoute
app.use("/api/", auth)
//authRoute
app.use("/api/", protect, [product, user])

//start sever
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
