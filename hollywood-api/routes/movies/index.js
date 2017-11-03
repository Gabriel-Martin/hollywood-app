// exporting all movie related routes
// as well as routes for adding a removing
// actors to and from movies
module.exports = [
  require("./createMovie"),
  require("./fetchMovie"),
  require("./fetchAllMovies"),
  require("./updateMovie"),
  require("./removeMovie"),
  require("./addActor"),
  require("./removeActor")
];
