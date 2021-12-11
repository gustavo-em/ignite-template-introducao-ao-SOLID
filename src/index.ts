import express from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

import { usersRoutes } from "./routes/users.routes";
import swaggerDocument from "./swagger.json";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Teste API",
            version: "1.0.0",
        },
    },
    apis: ["./src/routes/*.ts"], // files containing annotations as above
};

const openapiSpecification = swaggerJsdoc(options);

const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openapiSpecification));

app.use(express.json());

app.use("/users", usersRoutes);

export { app };
