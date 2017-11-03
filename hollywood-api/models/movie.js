// exporting db model for all new movie instances.
module.exports = db => {
  const type = db.type;

  const Movie = db.createModel("Movie", {
    title: type.string().required(),
    genre: type.string().required(),
    poster: type.string().required(),
    preview: type.string().required(),
    summary: type.string().required(),
    rating: type
      .string()
      .enum(["G", "PG", "PG-13", "R", "NC-17", "NR"])
      .required(),
    rottenTomatoes: type
      .number()
      .min(0)
      .max(100)
      .required()
  });

  return Movie;
};
