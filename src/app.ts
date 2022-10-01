import dotenv from 'dotenv';
import express from 'express';

// Load the enviroment variables from the .env file
dotenv.config({
  path: '.env',
});

/**
 * Express server application calss.
 * @description Will later contain the router system.
 */

class Server {
  public app = express();
}

// Initialize server app.
const server = new Server();

// Make server listen on some port.
((port = process.env.APP_PORT || 5000) => {
  server.app.listen(port, () => console.log(`> Listening on port ${port}`));
})();
