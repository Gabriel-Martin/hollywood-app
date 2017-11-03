// exporting db model for new actor instances
module.exports = db => {
  const type = db.type;
  const Actor = db.createModel("Actor", {
    age: type.number().required(),
    name: type.string().required(),
    image: type.string().required(),
    netWorth: type.string().required(),
    bestMovie: type.string().required(),
    gender: type
      .string()
      .enum(["male", "female"])
      .required()
  });

  return Actor;
};
