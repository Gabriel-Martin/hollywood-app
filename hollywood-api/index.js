// Declaring 'hapi' = to hapi folder.
const hapi = require("hapi");
// Declaring 'server' as new hapi Server.
const server = new hapi.Server();
// Declaring 'api' = to ./api file.
const api = require("./api");

// Configuring server connection.
server.connection({
  host: "localhost",
  port: 4040,
  routes: {
    cors: true
  },
  router: {
    stripTrailingSlash: true
  }
});

// Registering server via register
// function created in api.js file.
server.register(
  // First argument for register function. (server)
  [
    {
      register: api
    }
  ],
  // Second argument for register function. (options)
  () => {
    server.start(err => {
      if (err) {
        return console.log(err);
      }

      return console.log(`Server started at: ${server.info.uri}`);
    });
  }
);
