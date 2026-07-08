import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Node API",
      version: "1.0.0",
      description: "API con Express - Documentación con Swagger",
      contact: {
        name: "Jesus Felipe Aviles",
      },
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
    components: {
      schemas: {
        User: {
          type: "object",
          required: ["name", "email", "password"],
          properties: {
            _id: {
              type: "string",
              description: "ID generado por MongoDB",
              example: "686c1234a123456789abcdef"
            },
            name: {
              type: "string",
              description: "Nombre del usuario",
              example: "Jesus Felipe"
            },
            email: {
              type: "string",
              format: "email",
              description: "Correo electrónico",
              example: "jesus@gmail.com"
            },
            password: {
              type: "string",
              format: "password",
              writeOnly: true,
              description: "Contraseña del usuario",
              example: "123456"
            },
            age: {
              type: "integer",
              minimum: 18,
              maximum: 99,
              example: 22
            },
            isActive: {
              type: "boolean",
              example: true
            },
            roles: {
              type: "array",
              items: {
                type: "string"
              },
              example: ["admin", "user"]
            },
            address: {
              type: "object",
              properties: {
                street: {
                  type: "string",
                  example: "Av. Juárez 100"
                },
                city: {
                  type: "string",
                  example: "Toluca"
                },
                zipCode: {
                  type: "string",
                  example: "50000"
                }
              }
            },
            birthDate: {
              type: "string",
              format: "date",
              example: "2004-01-15"
            },
            salary: {
              type: "number",
              format: "double",
              example: 18000.50
            },
            status: {
              type: "string",
              enum: ["active", "inactive", "blocked"],
              example: "active"
            },
            createdAt: {
              type: "string",
              format: "date-time"
            },
            updatedAt: {
              type: "string",
              format: "date-time"
            }
          }
        },

        Error: {
          type: "object",
          properties: {
            message: {
              type: "string",
              example: "Error interno del servidor"
            }
          }
        }
      }
    }
  },
  apis: ["./routes/*.js"],
};

export const specs = swaggerJsdoc(options);