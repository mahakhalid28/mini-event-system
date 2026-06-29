import express from "express";

import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import routes from "./routes";


const app = express();

// Security
app.use(helmet());

// Enable CORS
app.use(cors());

// Parse JSON
app.use(express.json());

// Logging
app.use(morgan("dev"));
app.use("/api/v1", routes);

export default app;