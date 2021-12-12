import express from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

import { usersRoutes } from "./routes/users.routes";
import { options } from "./swagger/swaggeroptions";
import "./database";

const openapiSpecification = swaggerJsdoc(options);

const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openapiSpecification));

app.use(express.json());

app.use("/users", usersRoutes);

export { app };
