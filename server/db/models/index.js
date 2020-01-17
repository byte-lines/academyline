const User = require('./User');
const Category = require('./Category');
const Nominee = require('./Nominee');
const Movie = require('./Movie');

User.belongsToMany(Nominee, { through: 'Choice' });
Nominee.belongsToMany(User, { through: 'Choice' });

Category.hasMany(Nominee);

Movie.hasMany(Nominee);

User.belongsToMany(Movie, { through: 'Watched' });
Movie.belongsToMany(User, { through: 'Watched' });

module.exports = {
  User,
  Category,
  Nominee,
  Movie,
};
