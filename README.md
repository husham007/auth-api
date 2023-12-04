# auth-api
Authentication API

## Description

Auth API is a secure authentication service built with Node.js, Express, and TypeScript. It provides user authentication, token generation, and authorization functionalities to enhance the security of your applications.

## Frontend Repository

The frontend of the Personalized Weather Station is developed separately. You can find the code and details in the  following repo 

[![My Weather Station](https://img.shields.io/badge/Github-repo-000000?style=for-the-badge&logo=google-chrome&logoColor=white)](https://github.com/husham007/personalized-weather-station.git)

To integrate the backend with the frontend, make sure to configure the frontend to communicate with this API. Update the API endpoint in the frontend's `.env` file:

 Visualize the weather of your favorite locations by visiting our website:

[![My Weather Station](https://img.shields.io/badge/Personalized_Weather_Station-000000?style=for-the-badge&logo=google-chrome&logoColor=white)](https://personal-weather-station.netlify.app/)


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/husham007/auth-api.git

2. Clone the repository:

   ```bash
   npm install

3. Ensure that you have TypeScript and other required development dependencies installed:

   ```bash
   npm install --save-dev typescript ts-node-dev @types/bcrypt @types/cors @types/jsonwebtoken @types/mongoose

4. Build the TypeScript code:

   ```bash
   npm run build

5. Start the development server:

   ```bash
   npm run dev
   
## Configuration

1. Ensure that your environment variables are set up for proper API functionality. Create a `.env` file in the root directory and add the following:

   ```bash
   PORT=Your port
   DB_URL=Your mongoDB
   SECRET=Your secret key

## Dependencies

- [Express](https://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.js.
- [Cookie Parser](https://www.npmjs.com/package/cookie-parser): Parse HTTP request cookies.
- [Cors](https://github.com/expressjs/cors): Middleware for enabling Cross-Origin Resource Sharing (CORS) in Express.js.
- [Dotenv](https://www.npmjs.com/package/dotenv): Zero-dependency module that loads environment variables from a .env file.
- [Bcrypt](https://github.com/kelektiv/node.bcrypt.js/): Library for hashing passwords.
- [Jsonwebtoken](https://github.com/auth0/node-jsonwebtoken): JSON Web Token (JWT) implementation.
- [Mongoose](https://mongoosejs.com/): MongoDB object modeling tool designed to work in an asynchronous environment.
- [Ts-node](https://github.com/TypeStrong/ts-node): TypeScript execution and REPL for Node.js.

## Development Dependencies

- [TypeScript](https://www.typescriptlang.org/): Superset of JavaScript with static typing.
- [Ts-node-dev](https://github.com/wclr/ts-node-dev): Nodemon-like utility for TypeScript projects.
- [@types/bcrypt](https://www.npmjs.com/package/@types/bcrypt): TypeScript type definitions for Bcrypt.
- [@types/cors](https://www.npmjs.com/package/@types/cors): TypeScript type definitions for CORS.
- [@types/jsonwebtoken](https://www.npmjs.com/package/@types/jsonwebtoken): TypeScript type definitions for Jsonwebtoken.
- [@types/mongoose](https://www.npmjs.com/package/@types/mongoose): TypeScript type definitions for Mongoose.
- [@types/cookie-parser](https://www.npmjs.com/package/@types/cookie-parser): TypeScript type definitions for Cookie Parser.
- [@types/express](https://www.npmjs.com/package/@types/express): TypeScript type definitions for Express.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.
