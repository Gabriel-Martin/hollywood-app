// Declaring routes = to index.js files in ./routes folder.
const routes = require("./routes");
// Declaring models = to index.js files in ./models folder
const models = require("./models");

// Exporting register function
// for use in other files.
module.exports.register = function(server, options, next) {
  // Binding models to parent directory
  // so we can access it's properties
  // using 'this' syntax.
  server.bind({
    models: models
  });

  // Creating new server route.
  // 'routes' includes all server routes needed.
  server.route(routes);

  // Returning next state of server.
  return next();
};

// Exporting register attributes
// 'name' and 'version'.
module.exports.register.attributes = {
  name: "api",
  version: "1.0.0"
};
