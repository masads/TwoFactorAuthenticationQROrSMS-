import swaggerAutogen from "swagger-autogen";

const swaggerDocs = {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "RenTap",
  },
  host: "api.servolix.com/rentap",
  // host: "localhost:3300",
  tags: [
  ],
  schemes: ["http"],
};



const outputFile = './src/documentation/swagger-output.json'
const endpointsFiles = ['./src/app.js']


swaggerAutogen(outputFile, endpointsFiles, swaggerDocs);
