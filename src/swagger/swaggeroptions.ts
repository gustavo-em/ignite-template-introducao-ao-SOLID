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

export { options }