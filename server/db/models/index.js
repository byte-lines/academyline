const User = require("./User");
const Category = require("./Category");
const Nominee = require("./Nominee");
const Movie = require("./Movie");

User.hasMany(Movie, { through: Nominee });
Movie.hasMany(User, { through: Nominee });

Category.hasMany(Nominee);
Nominee.hasOne(Category);

Movie.hasMany(Nominee);
Nominee.hasOne(Movie);

User.hasMany(Movie, { through: "Watched" });
Movie.hasMany(User, { through: "Watched" });

module.exports = {
  User,
  Category,
  Nominee,
  Movie
};
