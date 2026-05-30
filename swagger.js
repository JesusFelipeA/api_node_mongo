import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Node API",
      version: "1.0.0",
      description: "API 2 - Documentación con Swagger",
      contact: {
        name: "Jesus Felipe Aviles",
      },
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Servidor de desarrollo",
      },
    ],
    components: {
      schemas: {
        User: {
          type: "object",
          required: ["nombre", "email", "password"],
          properties: {
            _id: {
              type: "string",
              description: "ID único del usuario",
            },
            nombre: {
              type: "string",
              description: "Nombre del usuario",
            },
            email: {
              type: "string",
              description: "Email del usuario",
            },
            password: {
              type: "string",
              description: "Contraseña del usuario",
            },
          },
        },
        Error: {
          type: "object",
          properties: {
            message: {
              type: "string",
            },
          },
        },
      },
    },
  },
  apis: ["./routes/*.js"],
};

export const specs = swaggerJsdoc(options);
