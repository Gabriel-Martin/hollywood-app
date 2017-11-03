// Importing thinky and config files
// for use in this file
const thinky = require("thinky");
const config = require("../config");

// Declaring new database using
// dbname from config file
const db = thinky({
  db: config.db.name,
  port: config.db.port,
  host: config.db.host
});

// Declaring 'Actor' = to function inside ./actor file
// and invoking that function.
// Passing in 'db' as argument.
const Actor = require("./actor")(db);
// Declaring 'Movie' = to function inside ./movie file
// and invoking that function.
// Passing in 'db' as argument.
const Movie = require("./movie")(db);

// Creating relations between Movie and Actor.
Movie.hasAndBelongsToMany(Actor, "actors", "id", "id");
// Creating relations between Actor and Movie.
Actor.hasAndBelongsToMany(Movie, "movies", "id", "id");

// Exporting object with Actor and Movie
// instances as properties.
module.exports = {
  Actor: Actor,
  Movie: Movie
};
