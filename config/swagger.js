import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Node API",
      version: "1.0.0",
      description: "API con EXPRESS - Documentación con Swagger",
      contact: {
        name: "Jesus Felipe Aviles",
      },
    },
    servers: [
      {
        url: "http://localhost:5000"
      },
    ],
    components: {
      schemas: {
        User: {
          type: "object",
          required: ["name"],
          properties: {
            name: {
              type: "string",
              description: "Nombre del usuario",
              example: "Jesus Felipe",
            },
          },
        },
        Error: {
          type: "object",
          properties: {
            message: {
              type: "string",
              example: "Error interno del servidor",
            },
          },
        },
      },
    },
  },
  apis: ["../routes/*.js"],
};

export const specs = swaggerJsdoc(options);