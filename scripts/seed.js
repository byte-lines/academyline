const db = rqeuire("../server/db");
const { User, Category, Nominee, Movie } = require("../server/db/models/");

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");

  const categories = await Promise.all([
    Category.create({ name: "Performance by an Actor in a Leading Role" }),
    Category.create({ name: "Performance by an Actor in a Supporting Role" }),
    Category.create({ name: "Performance by an Actress in a Leading Role" }),
    Category.create({ name: "Performance by an Actress in a Supporting Role" }),
    Category.create({ name: "Best Animated Feature Film of the Year" }),
    Category.create({ name: "Achievement in Cinematography" }),
    Category.create({ name: "Achievement in Costume Design" }),
    Category.create({ name: "Achievement in Directing" }),
    Category.create({ name: "Best Documentary Feature" }),
    Category.create({ name: "Best Documentary Short Subject" }),
    Category.create({ name: "Achievement in Film Editing" }),
    Category.create({ name: "Best International Feature Film of the Year" }),
    Category.create({ name: "Achievement in Makeup and Hairstyling" }),
    Category.create({
      name: "Achievement in Music Written for Motion Pictures (Original score)"
    }),
    Category.create({
      name: "Achievement in Music Written for Motion Pictures (Original song)"
    }),
    Category.create({ name: "Best Motion Picture of the Year" }),
    Category.create({ name: "Achievement in Production Design" }),
    Category.create({ name: "Best Animated Short Film" }),
    Category.create({ name: "Best Live Action Short Film" }),
    Category.create({ name: "Achievement in Sound Editing" }),
    Category.create({ name: "Achievement in Sound Mixing" }),
    Category.create({ name: "Achievement in Visual Effects" }),
    Category.create({ name: "Adapted Screenplay" }),
    Category.create({ name: "Original Screenplay" })
  ]);

  const movies = await Promise.all([
    Movie.create({ title: "Pain and Glory", country: "Spain" }),
    Movie.create({ title: "Once Upon A Time...In Hollywood" }),
    Movie.create({ title: "Marriage Story" }),
    Movie.create({ title: "Joker" }),
    Movie.create({ title: "The Two Popes" }),
    Movie.create({ title: "A Beautiful Day in the Neighborhood" }),
    Movie.create({ title: "The Irishman" }),
    Movie.create({ title: "Harriet" }),
    Movie.create({ title: "Little Women" }),
    Movie.create({ title: "Bombshell" }),
    Movie.create({ title: "Judy" }),
    Movie.create({ title: "Richard Jewell" }),
    Movie.create({ title: "Jojo Rabbit" }),
    Movie.create({ title: "How To Train Your Dragon: The Hidden World" }),
    Movie.create({ title: "I Lost My Body" }),
    Movie.create({ title: "Klaus" }),
    Movie.create({ title: "Missing Link" }),
    Movie.create({ title: "Toy Story 4" }),
    Movie.create({ title: "The Lighthouse" }),
    Movie.create({ title: "1917" }),
    Movie.create({ title: "Parasite", country: "South Korea" }),
    Movie.create({ title: "American Factory" }),
    Movie.create({ title: "The Cave" }),
    Movie.create({ title: "The Edge of Democracy" }),
    Movie.create({ title: "For Sama" }),
    Movie.create({ title: "Honeyland", country: "North Macedonia" }),
    Movie.create({ title: "In the Absence" }),
    Movie.create({
      title: "Learning to Skateboard in a Warzone (If You're A Girl)"
    }),
    Movie.create({ title: "Life Overtakes Me" }),
    Movie.create({ title: "St. Louis Superman" }),
    Movie.create({ title: "Walk Run Cha-Cha" }),
    Movie.create({ title: "Ford V Ferrari" }),
    Movie.create({ title: "Corpus Christi", country: "Poland" }),
    Movie.create({ title: "Les Misérables", country: "France" }),
    Movie.create({ title: "Maleficent: Mistress of Evil" }),
    Movie.create({ title: "Star Wars: The Rise of Skywalker" }),
    Movie.create({ title: "Rocketman" }),
    Movie.create({ title: "Breakthrough" }),
    Movie.create({ title: "Frozen II" }),
    Movie.create({ title: "Dcera" }),
    Movie.create({ title: "Hair Love" }),
    Movie.create({ title: "Kitbull" }),
    Movie.create({ title: "Memorable" }),
    Movie.create({ title: "Sister" }),
    Movie.create({ title: "Brotherhood" }),
    Movie.create({ title: "Nefta Football Club" }),
    Movie.create({ title: "The Neighbors' Window" }),
    Movie.create({ title: "Saria" }),
    Movie.create({ title: "A Sister" }),
    Movie.create({ title: "Ad Astra" }),
    Movie.create({ title: "Avengers: Endgame" }),
    Movie.create({ title: "The Lion King" }),
    Movie.create({ title: "Knives Out" })
  ]);

  //Custom components for categories[11, 14, 16, 22, 23]

  const nominees = await Promise.all([
    Nominee.create({
      name: "Antonio Banderas",
      categoryId: category[0].id,
      movieId: movie[0].id
    }),
    Nominee.create({
      name: "Leonardo DiCaprio",
      categoryId: category[0].id,
      movieId: movie[1].id
    }),
    Nominee.create({
      name: "Adam Driver",
      categoryId: category[0].id,
      movieId: movie[2].id
    }),
    Nominee.create({
      name: "Joaquin Phoenix",
      categoryId: category[0].id,
      movieId: movie[3].id
    }),
    Nominee.create({
      name: "Jonathan Price",
      categoryId: category[0].id,
      movieId: movie[4].id
    }),
    Nominee.create({
      name: "Tom Hanks",
      categoryId: category[1].id,
      movieId: movie[5].id
    }),
    Nominee.create({
      name: "Anthony Hopkins",
      categoryId: category[1].id,
      movieId: movie[4].id
    }),
    Nominee.create({
      name: "Al Pacino",
      categoryId: category[1].id,
      movieId: movie[6].id
    }),
    Nominee.create({
      name: "Joe Pesci",
      categoryId: category[1].id,
      movieId: movie[6].id
    }),
    Nominee.create({
      name: "Brad Pitt",
      categoryId: category[1].id,
      movieId: movie[1].id
    }),
    Nominee.create({
      name: "Cynthia Erivo",
      categoryId: category[2].id,
      movieId: movie[7].id
    }),
    Nominee.create({
      name: "Scarlett Johansson",
      categoryId: category[2].id,
      movieId: movie[2].id
    }),
    Nominee.create({
      name: "Saoirse Ronan",
      categoryId: category[2].id,
      movieId: movie[8].id
    }),
    Nominee.create({
      name: "Charlize Theron",
      categoryId: category[2].id,
      movieId: movie[9].id
    }),
    Nominee.create({
      name: "Renée Zellweger",
      categoryId: category[2].id,
      movieId: movie[10].id
    }),
    Nominee.create({
      name: "Kathy Bates",
      categoryId: category[3].id,
      movieId: movie[11].id
    }),
    Nominee.create({
      name: "Laura Dern",
      categoryId: category[3].id,
      movieId: movie[2].id
    }),
    Nominee.create({
      name: "Scarlett Johansson",
      categoryId: category[3].id,
      movieId: movie[12].id
    }),
    Nominee.create({
      name: "Florence Pugh",
      categoryId: category[3].id,
      movieId: movie[8].id
    }),
    Nominee.create({
      name: "Margot Robbie",
      categoryId: category[3].id,
      movieId: movie[9].id
    }),
    Nominee.create({
      name: "Dean DeBlois, Bradford Lewis and Bonnie Arnold",
      categoryId: category[4].id,
      movieId: movie[13].id
    }),
    Nominee.create({
      name: "Jérémy Clapin and Marc du Pontavice",
      categoryId: category[4].id,
      movieId: movie[14].id
    }),
    Nominee.create({
      name: "Sergio Pablos, Jinko Gotoh and Marisa Román",
      categoryId: category[4].id,
      movieId: movie[15].id
    }),
    Nominee.create({
      name: "Chris Butler, Arianne Sutner and Travis Knight",
      categoryId: category[4].id,
      movieId: movie[16].id
    }),
    Nominee.create({
      name: "Josh Cooley, Mark Nielsen and Jonas Rivera",
      categoryId: category[4].id,
      movieId: movie[17].id
    }),
    Nominee.create({
      name: "Rodrigo Prieto",
      categoryId: category[5].id,
      movieId: movie[6].id
    }),
    Nominee.create({
      name: "Lawrence Sher",
      categoryId: category[5].id,
      movieId: movie[3].id
    }),
    Nominee.create({
      name: "Jarin Blaschke",
      categoryId: category[5].id,
      movieId: movie[18].id
    }),
    Nominee.create({
      name: "Roger Deakins",
      categoryId: category[5].id,
      movieId: movie[19].id
    }),
    Nominee.create({
      name: "Robert Richardson",
      categoryId: category[5].id,
      movieId: movie[1].id
    }),
    Nominee.create({
      name: "Sandy Powell and Christopher Peterson",
      categoryId: category[6].id,
      movieId: movie[6].id
    }),
    Nominee.create({
      name: "Mayes C. Rubeo",
      categoryId: category[6].id,
      movieId: movie[12].id
    }),
    Nominee.create({
      name: "Mark Bridges",
      categoryId: category[6].id,
      movieId: movie[3].id
    }),
    Nominee.create({
      name: "Jacqueline Durran",
      categoryId: category[6].id,
      movieId: movie[8].id
    }),
    Nominee.create({
      name: "Arianne Phillips",
      categoryId: category[6].id,
      movieId: movie[1].id
    }),
    Nominee.create({
      name: "Martin Scorsese",
      categoryId: category[7].id,
      movieId: movie[6].id
    }),
    Nominee.create({
      name: "Todd Phillips",
      categoryId: category[7].id,
      movieId: movie[3].id
    }),
    Nominee.create({
      name: "Sam Mendes",
      categoryId: category[7].id,
      movieId: movie[19].id
    }),
    Nominee.create({
      name: "Quentin Tarantino",
      categoryId: category[7].id,
      movieId: movie[1].id
    }),
    Nominee.create({
      name: "Bong Joon Ho",
      categoryId: category[7].id,
      movieId: movie[20].id
    }),
    Nominee.create({
      name: "Steven Bognar, Julia Reichert and Jeff Reichert",
      categoryId: category[8].id,
      movieId: movie[21].id
    }),
    Nominee.create({
      name: "Feras Fayyad, Kirstine Barfod and Sigrid Dyekjær",
      categoryId: category[8].id,
      movieId: movie[22].id
    }),
    Nominee.create({
      name: "Petra Costa, Joanna Natasegara, Shane Boris and Tiago Pavan",
      categoryId: category[8].id,
      movieId: movie[23].id
    }),
    Nominee.create({
      name: "Waad al-Kateab and Edward Watts",
      categoryId: category[8].id,
      movieId: movie[24].id
    }),
    Nominee.create({
      name: "Ljubo Stefanov, Tamara Kotevska and Atanas Georgiev",
      categoryId: category[8].id,
      movieId: movie[25].id
    }),
    Nominee.create({
      name: "Yi Seung-Jun and Gary Byung-Seok Kam",
      categoryId: category[9].id,
      movieId: movie[26].id
    }),
    Nominee.create({
      name: "Carol Dysinger and Elena Andreicheva",
      categoryId: category[9].id,
      movieId: movie[27].id
    }),
    Nominee.create({
      name: "John Haptas and Kristine Samuelson",
      categoryId: category[9].id,
      movieId: movie[28].id
    }),
    Nominee.create({
      name: "Smriti Mundhra and Sami Khan",
      categoryId: category[9].id,
      movieId: movie[29].id
    }),
    Nominee.create({
      name: "Laura Nix and Colette Sandstedt",
      categoryId: category[9].id,
      movieId: movie[30].id
    }),
    Nominee.create({
      name: "Michael McCusker and Andrew Buckland",
      categoryId: category[10].id,
      movieId: movie[31].id
    }),
    Nominee.create({
      name: "Thelma Schoonmaker",
      categoryId: category[10].id,
      movieId: movie[6].id
    }),
    Nominee.create({
      name: "Tom Eagles",
      categoryId: category[10].id,
      movieId: movie[12].id
    }),
    Nominee.create({
      name: "Jeff Groth",
      categoryId: category[10].id,
      movieId: movie[3].id
    }),
    Nominee.create({
      name: "Yang Jinmo",
      categoryId: category[10].id,
      movieId: movie[20].id
    }),
    Nominee.create({
      name: "Jan Komasa",
      categoryId: category[11].id,
      movieId: movie[32].id
    }),
    Nominee.create({
      name: "Ljubo Stefanov and Tamara Kotevska",
      categoryId: category[11].id,
      movieId: movie[25].id
    }),
    Nominee.create({
      name: "Ladj Ly",
      categoryId: category[11].id,
      movieId: movie[33].id
    }),
    Nominee.create({
      name: "Pedro Almodóvar",
      categoryId: category[11].id,
      movieId: movie[1].id
    }),
    Nominee.create({
      name: "Bong Joon Ho",
      categoryId: category[11].id,
      movieId: movie[20].id
    }),
    Nominee.create({
      name: "Kazu Hiro, Anne Morgan and Vivian Baker",
      categoryId: category[12].id,
      movieId: movie[9].id
    }),
    Nominee.create({
      name: "Nicki Ledermann and Kay Georgiou",
      categoryId: category[12].id,
      movieId: movie[3].id
    }),
    Nominee.create({
      name: "Jeremy Woodhead",
      categoryId: category[12].id,
      movieId: movie[10].id
    }),
    Nominee.create({
      name: "Paul Gooch, Arjen Tuiten and David White",
      categoryId: category[12].id,
      movieId: movie[34].id
    }),
    Nominee.create({
      name: "Naomi Donne, Tristan Versluis and Rebecca Cole",
      categoryId: category[12].id,
      movieId: movie[19].id
    }),
    Nominee.create({
      name: "Hildur Guonadóttir",
      categoryId: category[13].id,
      movieId: movie[3].id
    }),
    Nominee.create({
      name: "Alexandre Desplat",
      categoryId: category[13].id,
      movieId: movie[8].id
    }),
    Nominee.create({
      name: "Randy Newman",
      categoryId: category[13].id,
      movieId: movie[2].id
    }),
    Nominee.create({
      name: "Thomas Newman",
      categoryId: category[13].id,
      movieId: movie[19].id
    }),
    Nominee.create({
      name: "John Williams",
      categoryId: category[13].id,
      movieId: movie[35].id
    }),
    Nominee.create({
      name: "Randy Newman",
      categoryId: category[14].id,
      movieId: movie[17].id
    }),
    Nominee.create({
      name: "Elton John",
      categoryId: category[14].id,
      movieId: movie[36].id
    }),
    Nominee.create({
      name: "Diane Warren",
      categoryId: category[14].id,
      movieId: movie[37].id
    }),
    Nominee.create({
      name: "Kristen Anderson-Lopez and Robert Lopez",
      categoryId: category[14].id,
      movieId: movie[38].id
    }),
    Nominee.create({
      name: "Joshuah Brian Campbell and Cynthia Erivo",
      categoryId: category[14].id,
      movieId: movie[7].id
    }),
    Nominee.create({
      name: "James Mangold",
      categoryId: category[15].id,
      movieId: movie[31].id
    }),
    Nominee.create({
      name: "Martin Scorsese",
      categoryId: category[15].id,
      movieId: movie[6].id
    }),
    Nominee.create({
      name: "Taika Waititi",
      categoryId: category[15].id,
      movieId: movie[12].id
    }),
    Nominee.create({
      name: "Todd Phillips",
      categoryId: category[15].id,
      movieId: movie[3].id
    }),
    Nominee.create({
      name: "Greta Gerwig",
      categoryId: category[15].id,
      movieId: movie[8].id
    }),
    Nominee.create({
      name: "Noah Baumbach",
      categoryId: category[15].id,
      movieId: movie[2].id
    }),
    Nominee.create({
      name: "Sam Mendes",
      categoryId: category[15].id,
      movieId: movie[19].id
    }),
    Nominee.create({
      name: "Quentin Tarantino",
      categoryId: category[15].id,
      movieId: movie[1].id
    }),
    Nominee.create({
      name: "Bong Joon Ho",
      categoryId: category[15].id,
      movieId: movie[20].id
    }),
    Nominee.create({
      name: "Bob Shaw+Regina Graves",
      categoryId: category[16].id,
      movieId: movie[6].id
    }),
    Nominee.create({
      name: "Ra Vincent+Nora Sopková",
      categoryId: category[16].id,
      movieId: movie[12].id
    }),
    Nominee.create({
      name: "Dennis Gassner+Lee Sandales",
      categoryId: category[16].id,
      movieId: movie[19].id
    }),
    Nominee.create({
      name: "Barbara Ling+Nancy Haigh",
      categoryId: category[16].id,
      movieId: movie[1].id
    }),
    Nominee.create({
      name: "Lee Ha Jun+Cho Won Woo",
      categoryId: category[16].id,
      movieId: movie[20].id
    }),
    Nominee.create({
      name: "Daria Kashcheeva",
      categoryId: category[17].id,
      movieId: movie[39].id
    }),
    Nominee.create({
      name: "Matthew A. Cherry and Karen Rupert Toliver",
      categoryId: category[17].id,
      movieId: movie[40].id
    }),
    Nominee.create({
      name: "Rosana Sullivan and Kathryn Hendrickson",
      categoryId: category[17].id,
      movieId: movie[41].id
    }),
    Nominee.create({
      name: "Bruno Collet and Jean-Francois Le Corre",
      categoryId: category[17].id,
      movieId: movie[42].id
    }),
    Nominee.create({
      name: "Siqi Song",
      categoryId: category[17].id,
      movieId: movie[43].id
    }),
    Nominee.create({
      name: "Meryam Joobeur and Maria Gracia Turgeon",
      categoryId: category[18].id,
      movieId: movie[44].id
    }),
    Nominee.create({
      name: "Yves Piat and Damien Megherbi",
      categoryId: category[18].id,
      movieId: movie[45].id
    }),
    Nominee.create({
      name: "Marshall Curry",
      categoryId: category[18].id,
      movieId: movie[46].id
    }),
    Nominee.create({
      name: "Bryan Buckley and Matt Lefebvre",
      categoryId: category[18].id,
      movieId: movie[47].id
    }),
    Nominee.create({
      name: "Delphine Girard",
      categoryId: category[18].id,
      movieId: movie[48].id
    }),
    Nominee.create({
      name: "Donald Sylvester",
      categoryId: category[19].id,
      movieId: movie[31].id
    }),
    Nominee.create({
      name: "Alan Robert Murray",
      categoryId: category[19].id,
      movieId: movie[3].id
    }),
    Nominee.create({
      name: "Oliver Tarney and Rachael Tate",
      categoryId: category[19].id,
      movieId: movie[19].id
    }),
    Nominee.create({
      name: "Wylie Stateman",
      categoryId: category[19].id,
      movieId: movie[1].id
    }),
    Nominee.create({
      name: "Matthew Wood and David Acord",
      categoryId: category[19].id,
      movieId: movie[35].id
    }),
    Nominee.create({
      name: "Gary Rydstrom, Tom Johnson and Mark Ulano",
      categoryId: category[20].id,
      movieId: movie[49].id
    }),
    Nominee.create({
      name: "Paul Massey, David Giammarco and Steven A. Morrow",
      categoryId: category[20].id,
      movieId: movie[31].id
    }),
    Nominee.create({
      name: "Tom Ozanich, Dean Zupancic and Tod Maitland",
      categoryId: category[20].id,
      movieId: movie[3].id
    }),
    Nominee.create({
      name: "Mark Taylor and Stuart Wilson",
      categoryId: category[20].id,
      movieId: movie[19].id
    }),
    Nominee.create({
      name: "Michael Minkler, Christian P. Minkler and Mark Ulano",
      categoryId: category[20].id,
      movieId: movie[1].id
    }),
    Nominee.create({
      name: "Dan DeLeeuw, Russell Earl, Matt Aitken and Dan Sudick",
      categoryId: category[21].id,
      movieId: movie[50].id
    }),
    Nominee.create({
      name:
        "Pablo Helman, Leandro Estebecorena, Nelson Sepulveda-Fauser and Stephane Grabli",
      categoryId: category[21].id,
      movieId: movie[6].id
    }),
    Nominee.create({
      name: "Robert Legato, Adam Valdez, Andrew R. Jones and Elliot Newman",
      categoryId: category[21].id,
      movieId: movie[51].id
    }),
    Nominee.create({
      name: "Guillaume Rocheron, Greg Butler and Dominic Tuohy",
      categoryId: category[21].id,
      movieId: movie[19].id
    }),
    Nominee.create({
      name: "Roger Guyett, Neal Scanlan, Patrick Tubach and Dominic Tuohy",
      categoryId: category[21].id,
      movieId: movie[35].id
    }),
    Nominee.create({
      name: "Steven Zaillian",
      categoryId: category[22].id,
      movieId: movie[6].id
    }),
    Nominee.create({
      name: "Taika Waititi",
      categoryId: category[22].id,
      movieId: movie[12].id
    }),
    Nominee.create({
      name: "Todd Phillips & Scott Silver",
      categoryId: category[22].id,
      movieId: movie[3].id
    }),
    Nominee.create({
      name: "Greta Gerwig",
      categoryId: category[22].id,
      movieId: movie[8].id
    }),
    Nominee.create({
      name: "Anthony McCarten",
      categoryId: category[22].id,
      movieId: movie[4].id
    }),
    Nominee.create({
      name: "Rian Johnson",
      categoryId: category[23].id,
      movieId: movie[52].id
    }),
    Nominee.create({
      name: "Noah Baumbach",
      categoryId: category[23].id,
      movieId: movie[2].id
    }),
    Nominee.create({
      name: "Sam Mendes and Krysty Wilson-Cairns",
      categoryId: category[23].id,
      movieId: movie[19].id
    }),
    Nominee.create({
      name: "Quentin Tarantino",
      categoryId: category[23].id,
      movieId: movie[1].id
    }),
    Nominee.create({
      name: "Bong Joon Ho and Han Jin Won",
      categoryId: category[23].id,
      movieId: movie[20].id
    })
  ]);

  console.log("seeded successfully");
}

async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
