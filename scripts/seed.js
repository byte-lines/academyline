// const { db } = require('../server/db');
const { User, Category, Nominee, Movie, db } = require("../server/db");

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");

  const categories = await Promise.all([
    Category.create({
      name: "Performance by an Actor in a Leading Role",
      pseudoId: 1
    }),
    Category.create({
      name: "Performance by an Actor in a Supporting Role",
      pseudoId: 2
    }),
    Category.create({
      name: "Performance by an Actress in a Leading Role",
      pseudoId: 3
    }),
    Category.create({
      name: "Performance by an Actress in a Supporting Role",
      pseudoId: 4
    }),
    Category.create({
      name: "Best Animated Feature Film of the Year",
      pseudoId: 5
    }),
    Category.create({ name: "Achievement in Cinematography", pseudoId: 6 }),
    Category.create({ name: "Achievement in Costume Design", pseudoId: 7 }),
    Category.create({ name: "Achievement in Directing", pseudoId: 8 }),
    Category.create({ name: "Best Documentary Feature", pseudoId: 9 }),
    Category.create({ name: "Best Documentary Short Subject", pseudoId: 10 }),
    Category.create({ name: "Achievement in Film Editing", pseudoId: 11 }),
    Category.create({
      name: "Best International Feature Film of the Year",
      pseudoId: 12
    }),
    Category.create({
      name: "Achievement in Makeup and Hairstyling",
      pseudoId: 13
    }),
    Category.create({
      name: "Achievement in Music Written for Motion Pictures (Original score)",
      pseudoId: 14
    }),
    Category.create({
      name: "Achievement in Music Written for Motion Pictures (Original song)",
      pseudoId: 15
    }),
    Category.create({ name: "Best Motion Picture of the Year", pseudoId: 16 }),
    Category.create({ name: "Achievement in Production Design", pseudoId: 17 }),
    Category.create({ name: "Best Animated Short Film", pseudoId: 18 }),
    Category.create({ name: "Best Live Action Short Film", pseudoId: 19 }),
    Category.create({ name: "Achievement in Sound Editing", pseudoId: 20 }),
    Category.create({ name: "Achievement in Sound Mixing", pseudoId: 21 }),
    Category.create({ name: "Achievement in Visual Effects", pseudoId: 22 }),
    Category.create({ name: "Adapted Screenplay", pseudoId: 23 }),
    Category.create({ name: "Original Screenplay", pseudoId: 24 })
  ]);

  const movies = await Promise.all([
    Movie.create({ title: "Pain and Glory", country: "(Spain)" }),
    Movie.create({ title: "Once Upon A Time...In Hollywood" }),
    Movie.create({ title: "Marriage Story" }),
    Movie.create({ title: "Joker" }),
    Movie.create({ title: "The Two Popes" }),
    Movie.create({ title: "A Beautiful Day in the Neighborhood" }),
    Movie.create({ title: "The Irishman" }),
    Movie.create({ title: "Harriet", originalSong: "Stand Up" }),
    Movie.create({ title: "Little Women" }),
    Movie.create({ title: "Bombshell" }),
    Movie.create({ title: "Judy" }),
    Movie.create({ title: "Richard Jewell" }),
    Movie.create({ title: "Jojo Rabbit" }),
    Movie.create({ title: "How To Train Your Dragon: The Hidden World" }),
    Movie.create({ title: "I Lost My Body" }),
    Movie.create({ title: "Klaus" }),
    Movie.create({ title: "Missing Link" }),
    Movie.create({
      title: "Toy Story 4",
      originalSong: "I Can't Let You Throw Yourself Away"
    }),
    Movie.create({ title: "The Lighthouse" }),
    Movie.create({ title: "1917" }),
    Movie.create({ title: "Parasite", country: "(South Korea)" }),
    Movie.create({ title: "American Factory" }),
    Movie.create({ title: "The Cave" }),
    Movie.create({ title: "The Edge of Democracy" }),
    Movie.create({ title: "For Sama" }),
    Movie.create({ title: "Honeyland", country: "(North Macedonia)" }),
    Movie.create({ title: "In the Absence" }),
    Movie.create({
      title: ""
    }),
    Movie.create({ title: "Life Overtakes Me" }),
    Movie.create({ title: "St. Louis Superman" }),
    Movie.create({ title: "Walk Run Cha-Cha" }),
    Movie.create({ title: "Ford V Ferrari" }),
    Movie.create({ title: "Corpus Christi", country: "(Poland)" }),
    Movie.create({ title: "Les Misérables", country: "(France)" }),
    Movie.create({ title: "Maleficent: Mistress of Evil" }),
    Movie.create({ title: "Star Wars: The Rise of Skywalker" }),
    Movie.create({
      title: "Rocketman",
      originalSong: "(I'm Gonna) Love Me Again"
    }),
    Movie.create({
      title: "Breakthrough",
      originalSong: "I'm Standing With You"
    }),
    Movie.create({ title: "Frozen II", originalSong: "Into The Unknown" }),
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
    Movie.create({ title: "Knives Out" }),
    Movie.create({
      title: "Learning to Skateboard in a Warzone\n(If You're A Girl)"
    })
  ]);

  const nominees = await Promise.all([
    Nominee.create({
      name: "Antonio Banderas",
      categoryId: categories[0].id,
      movieId: movies[0].id
    }),
    Nominee.create({
      name: "Leonardo DiCaprio",
      categoryId: categories[0].id,
      movieId: movies[1].id
    }),
    Nominee.create({
      name: "Adam Driver",
      categoryId: categories[0].id,
      movieId: movies[2].id
    }),
    Nominee.create({
      name: "Joaquin Phoenix",
      categoryId: categories[0].id,
      movieId: movies[3].id
    }),
    Nominee.create({
      name: "Jonathan Price",
      categoryId: categories[0].id,
      movieId: movies[4].id
    }),
    Nominee.create({
      name: "Tom Hanks",
      categoryId: categories[1].id,
      movieId: movies[5].id
    }),
    Nominee.create({
      name: "Anthony Hopkins",
      categoryId: categories[1].id,
      movieId: movies[4].id
    }),
    Nominee.create({
      name: "Al Pacino",
      categoryId: categories[1].id,
      movieId: movies[6].id
    }),
    Nominee.create({
      name: "Joe Pesci",
      categoryId: categories[1].id,
      movieId: movies[6].id
    }),
    Nominee.create({
      name: "Brad Pitt",
      categoryId: categories[1].id,
      movieId: movies[1].id
    }),
    Nominee.create({
      name: "Cynthia Erivo",
      categoryId: categories[2].id,
      movieId: movies[7].id
    }),
    Nominee.create({
      name: "Scarlett Johansson",
      categoryId: categories[2].id,
      movieId: movies[2].id
    }),
    Nominee.create({
      name: "Saoirse Ronan",
      categoryId: categories[2].id,
      movieId: movies[8].id
    }),
    Nominee.create({
      name: "Charlize Theron",
      categoryId: categories[2].id,
      movieId: movies[9].id
    }),
    Nominee.create({
      name: "Renée Zellweger",
      categoryId: categories[2].id,
      movieId: movies[10].id
    }),
    Nominee.create({
      name: "Kathy Bates",
      categoryId: categories[3].id,
      movieId: movies[11].id
    }),
    Nominee.create({
      name: "Laura Dern",
      categoryId: categories[3].id,
      movieId: movies[2].id
    }),
    Nominee.create({
      name: "Scarlett Johansson",
      categoryId: categories[3].id,
      movieId: movies[12].id
    }),
    Nominee.create({
      name: "Florence Pugh",
      categoryId: categories[3].id,
      movieId: movies[8].id
    }),
    Nominee.create({
      name: "Margot Robbie",
      categoryId: categories[3].id,
      movieId: movies[9].id
    }),
    Nominee.create({
      name: "Dean DeBlois, Bradford Lewis & Bonnie Arnold",
      categoryId: categories[4].id,
      movieId: movies[13].id
    }),
    Nominee.create({
      name: "Jérémy Clapin & Marc du Pontavice",
      categoryId: categories[4].id,
      movieId: movies[14].id
    }),
    Nominee.create({
      name: "Sergio Pablos, Jinko Gotoh & Marisa Román",
      categoryId: categories[4].id,
      movieId: movies[15].id
    }),
    Nominee.create({
      name: "Chris Butler, Arianne Sutner & Travis Knight",
      categoryId: categories[4].id,
      movieId: movies[16].id
    }),
    Nominee.create({
      name: "Josh Cooley, Mark Nielsen & Jonas Rivera",
      categoryId: categories[4].id,
      movieId: movies[17].id
    }),
    Nominee.create({
      name: "Rodrigo Prieto",
      categoryId: categories[5].id,
      movieId: movies[6].id
    }),
    Nominee.create({
      name: "Lawrence Sher",
      categoryId: categories[5].id,
      movieId: movies[3].id
    }),
    Nominee.create({
      name: "Jarin Blaschke",
      categoryId: categories[5].id,
      movieId: movies[18].id
    }),
    Nominee.create({
      name: "Roger Deakins",
      categoryId: categories[5].id,
      movieId: movies[19].id
    }),
    Nominee.create({
      name: "Robert Richardson",
      categoryId: categories[5].id,
      movieId: movies[1].id
    }),
    Nominee.create({
      name: "Sandy Powell & Christopher Peterson",
      categoryId: categories[6].id,
      movieId: movies[6].id
    }),
    Nominee.create({
      name: "Mayes C. Rubeo",
      categoryId: categories[6].id,
      movieId: movies[12].id
    }),
    Nominee.create({
      name: "Mark Bridges",
      categoryId: categories[6].id,
      movieId: movies[3].id
    }),
    Nominee.create({
      name: "Jacqueline Durran",
      categoryId: categories[6].id,
      movieId: movies[8].id
    }),
    Nominee.create({
      name: "Arianne Phillips",
      categoryId: categories[6].id,
      movieId: movies[1].id
    }),
    Nominee.create({
      name: "Martin Scorsese",
      categoryId: categories[7].id,
      movieId: movies[6].id
    }),
    Nominee.create({
      name: "Todd Phillips",
      categoryId: categories[7].id,
      movieId: movies[3].id
    }),
    Nominee.create({
      name: "Sam Mendes",
      categoryId: categories[7].id,
      movieId: movies[19].id
    }),
    Nominee.create({
      name: "Quentin Tarantino",
      categoryId: categories[7].id,
      movieId: movies[1].id
    }),
    Nominee.create({
      name: "Bong Joon Ho",
      categoryId: categories[7].id,
      movieId: movies[20].id
    }),
    Nominee.create({
      name: "Steven Bognar, Julia Reichert & Jeff Reichert",
      categoryId: categories[8].id,
      movieId: movies[21].id
    }),
    Nominee.create({
      name: "Feras Fayyad, Kirstine Barfod & Sigrid Dyekjær",
      categoryId: categories[8].id,
      movieId: movies[22].id
    }),
    Nominee.create({
      name: "Petra Costa, Joanna Natasegara, Shane Boris & Tiago Pavan",
      categoryId: categories[8].id,
      movieId: movies[23].id
    }),
    Nominee.create({
      name: "Waad al-Kateab & Edward Watts",
      categoryId: categories[8].id,
      movieId: movies[24].id
    }),
    Nominee.create({
      name: "Ljubo Stefanov, Tamara Kotevska & Atanas Georgiev",
      categoryId: categories[8].id,
      movieId: movies[25].id
    }),
    Nominee.create({
      name: "Yi Seung-Jun & Gary Byung-Seok Kam",
      categoryId: categories[9].id,
      movieId: movies[26].id
    }),

    Nominee.create({
      name: "John Haptas & Kristine Samuelson",
      categoryId: categories[9].id,
      movieId: movies[28].id
    }),
    Nominee.create({
      name: "Smriti Mundhra & Sami Khan",
      categoryId: categories[9].id,
      movieId: movies[29].id
    }),
    Nominee.create({
      name: "Laura Nix & Colette Sandstedt",
      categoryId: categories[9].id,
      movieId: movies[30].id
    }),
    Nominee.create({
      name: "Carol Dysinger & Elena Andreicheva",
      categoryId: categories[9].id,
      movieId: movies[53].id
    }),
    Nominee.create({
      name: "Michael McCusker & Andrew Buckland",
      categoryId: categories[10].id,
      movieId: movies[31].id
    }),
    Nominee.create({
      name: "Thelma Schoonmaker",
      categoryId: categories[10].id,
      movieId: movies[6].id
    }),
    Nominee.create({
      name: "Tom Eagles",
      categoryId: categories[10].id,
      movieId: movies[12].id
    }),
    Nominee.create({
      name: "Jeff Groth",
      categoryId: categories[10].id,
      movieId: movies[3].id
    }),
    Nominee.create({
      name: "Yang Jinmo",
      categoryId: categories[10].id,
      movieId: movies[20].id
    }),
    Nominee.create({
      name: "Jan Komasa",
      categoryId: categories[11].id,
      movieId: movies[32].id
    }),
    Nominee.create({
      name: "Ljubo Stefanov & Tamara Kotevska",
      categoryId: categories[11].id,
      movieId: movies[25].id
    }),
    Nominee.create({
      name: "Ladj Ly",
      categoryId: categories[11].id,
      movieId: movies[33].id
    }),
    Nominee.create({
      name: "Pedro Almodóvar",
      categoryId: categories[11].id,
      movieId: movies[0].id
    }),
    Nominee.create({
      name: "Bong Joon Ho",
      categoryId: categories[11].id,
      movieId: movies[20].id
    }),
    Nominee.create({
      name: "Kazu Hiro, Anne Morgan & Vivian Baker",
      categoryId: categories[12].id,
      movieId: movies[9].id
    }),
    Nominee.create({
      name: "Nicki Ledermann & Kay Georgiou",
      categoryId: categories[12].id,
      movieId: movies[3].id
    }),
    Nominee.create({
      name: "Jeremy Woodhead",
      categoryId: categories[12].id,
      movieId: movies[10].id
    }),
    Nominee.create({
      name: "Paul Gooch, Arjen Tuiten & David White",
      categoryId: categories[12].id,
      movieId: movies[34].id
    }),
    Nominee.create({
      name: "Naomi Donne, Tristan Versluis & Rebecca Cole",
      categoryId: categories[12].id,
      movieId: movies[19].id
    }),
    Nominee.create({
      name: "Hildur Guonadóttir",
      categoryId: categories[13].id,
      movieId: movies[3].id
    }),
    Nominee.create({
      name: "Alexandre Desplat",
      categoryId: categories[13].id,
      movieId: movies[8].id
    }),
    Nominee.create({
      name: "Randy Newman",
      categoryId: categories[13].id,
      movieId: movies[2].id
    }),
    Nominee.create({
      name: "Thomas Newman",
      categoryId: categories[13].id,
      movieId: movies[19].id
    }),
    Nominee.create({
      name: "John Williams",
      categoryId: categories[13].id,
      movieId: movies[35].id
    }),
    Nominee.create({
      name: "Randy Newman",
      categoryId: categories[14].id,
      movieId: movies[17].id
    }),
    Nominee.create({
      name: "Elton John+Bernie Taupin",
      categoryId: categories[14].id,
      movieId: movies[36].id
    }),
    Nominee.create({
      name: "Diane Warren",
      categoryId: categories[14].id,
      movieId: movies[37].id
    }),
    Nominee.create({
      name: "Kristen Anderson-Lopez & Robert Lopez",
      categoryId: categories[14].id,
      movieId: movies[38].id
    }),
    Nominee.create({
      name: "Joshuah Brian Campbell & Cynthia Erivo",
      categoryId: categories[14].id,
      movieId: movies[7].id
    }),
    Nominee.create({
      name: "James Mangold",
      categoryId: categories[15].id,
      movieId: movies[31].id
    }),
    Nominee.create({
      name: "Martin Scorsese",
      categoryId: categories[15].id,
      movieId: movies[6].id
    }),
    Nominee.create({
      name: "Taika Waititi",
      categoryId: categories[15].id,
      movieId: movies[12].id
    }),
    Nominee.create({
      name: "Todd Phillips",
      categoryId: categories[15].id,
      movieId: movies[3].id
    }),
    Nominee.create({
      name: "Greta Gerwig",
      categoryId: categories[15].id,
      movieId: movies[8].id
    }),
    Nominee.create({
      name: "Noah Baumbach",
      categoryId: categories[15].id,
      movieId: movies[2].id
    }),
    Nominee.create({
      name: "Sam Mendes",
      categoryId: categories[15].id,
      movieId: movies[19].id
    }),
    Nominee.create({
      name: "Quentin Tarantino",
      categoryId: categories[15].id,
      movieId: movies[1].id
    }),
    Nominee.create({
      name: "Bong Joon Ho",
      categoryId: categories[15].id,
      movieId: movies[20].id
    }),
    Nominee.create({
      name: "Bob Shaw+Regina Graves",
      categoryId: categories[16].id,
      movieId: movies[6].id
    }),
    Nominee.create({
      name: "Ra Vincent+Nora Sopková",
      categoryId: categories[16].id,
      movieId: movies[12].id
    }),
    Nominee.create({
      name: "Dennis Gassner+Lee Sales",
      categoryId: categories[16].id,
      movieId: movies[19].id
    }),
    Nominee.create({
      name: "Barbara Ling+Nancy Haigh",
      categoryId: categories[16].id,
      movieId: movies[1].id
    }),
    Nominee.create({
      name: "Lee Ha Jun+Cho Won Woo",
      categoryId: categories[16].id,
      movieId: movies[20].id
    }),
    Nominee.create({
      name: "Daria Kashcheeva",
      categoryId: categories[17].id,
      movieId: movies[39].id
    }),
    Nominee.create({
      name: "Matthew A. Cherry & Karen Rupert Toliver",
      categoryId: categories[17].id,
      movieId: movies[40].id
    }),
    Nominee.create({
      name: "Rosana Sullivan & Kathryn Hendrickson",
      categoryId: categories[17].id,
      movieId: movies[41].id
    }),
    Nominee.create({
      name: "Bruno Collet & Jean-Francois Le Corre",
      categoryId: categories[17].id,
      movieId: movies[42].id
    }),
    Nominee.create({
      name: "Siqi Song",
      categoryId: categories[17].id,
      movieId: movies[43].id
    }),
    Nominee.create({
      name: "Meryam Joobeur & Maria Gracia Turgeon",
      categoryId: categories[18].id,
      movieId: movies[44].id
    }),
    Nominee.create({
      name: "Yves Piat & Damien Megherbi",
      categoryId: categories[18].id,
      movieId: movies[45].id
    }),
    Nominee.create({
      name: "Marshall Curry",
      categoryId: categories[18].id,
      movieId: movies[46].id
    }),
    Nominee.create({
      name: "Bryan Buckley & Matt Lefebvre",
      categoryId: categories[18].id,
      movieId: movies[47].id
    }),
    Nominee.create({
      name: "Delphine Girard",
      categoryId: categories[18].id,
      movieId: movies[48].id
    }),
    Nominee.create({
      name: "Donald Sylvester",
      categoryId: categories[19].id,
      movieId: movies[31].id
    }),
    Nominee.create({
      name: "Alan Robert Murray",
      categoryId: categories[19].id,
      movieId: movies[3].id
    }),
    Nominee.create({
      name: "Oliver Tarney & Rachael Tate",
      categoryId: categories[19].id,
      movieId: movies[19].id
    }),
    Nominee.create({
      name: "Wylie Stateman",
      categoryId: categories[19].id,
      movieId: movies[1].id
    }),
    Nominee.create({
      name: "Matthew Wood & David Acord",
      categoryId: categories[19].id,
      movieId: movies[35].id
    }),
    Nominee.create({
      name: "Gary Rydstrom, Tom Johnson & Mark Ulano",
      categoryId: categories[20].id,
      movieId: movies[49].id
    }),
    Nominee.create({
      name: "Paul Massey, David Giammarco & Steven A. Morrow",
      categoryId: categories[20].id,
      movieId: movies[31].id
    }),
    Nominee.create({
      name: "Tom Ozanich, Dean Zupancic & Tod Maitland",
      categoryId: categories[20].id,
      movieId: movies[3].id
    }),
    Nominee.create({
      name: "Mark Taylor & Stuart Wilson",
      categoryId: categories[20].id,
      movieId: movies[19].id
    }),
    Nominee.create({
      name: "Michael Minkler, Christian P. Minkler & Mark Ulano",
      categoryId: categories[20].id,
      movieId: movies[1].id
    }),
    Nominee.create({
      name: "Dan DeLeeuw, Russell Earl, Matt Aitken & Dan Sudick",
      categoryId: categories[21].id,
      movieId: movies[50].id
    }),
    Nominee.create({
      name:
        "Pablo Helman, Leandro Estebecorena,\nNelson Sepulveda-Fauser & Stephane Grabli",
      categoryId: categories[21].id,
      movieId: movies[6].id
    }),
    Nominee.create({
      name: "Robert Legato, Adam Valdez, Andrew R. Jones & Elliot Newman",
      categoryId: categories[21].id,
      movieId: movies[51].id
    }),
    Nominee.create({
      name: "Guillaume Rocheron, Greg Butler & Dominic Tuohy",
      categoryId: categories[21].id,
      movieId: movies[19].id
    }),
    Nominee.create({
      name: "Roger Guyett, Neal Scanlan, Patrick Tubach & Dominic Tuohy",
      categoryId: categories[21].id,
      movieId: movies[35].id
    }),
    Nominee.create({
      name: "Steven Zaillian",
      categoryId: categories[22].id,
      movieId: movies[6].id
    }),
    Nominee.create({
      name: "Taika Waititi",
      categoryId: categories[22].id,
      movieId: movies[12].id
    }),
    Nominee.create({
      name: "Todd Phillips & Scott Silver",
      categoryId: categories[22].id,
      movieId: movies[3].id
    }),
    Nominee.create({
      name: "Greta Gerwig",
      categoryId: categories[22].id,
      movieId: movies[8].id
    }),
    Nominee.create({
      name: "Anthony McCarten",
      categoryId: categories[22].id,
      movieId: movies[4].id
    }),
    Nominee.create({
      name: "Rian Johnson",
      categoryId: categories[23].id,
      movieId: movies[52].id
    }),
    Nominee.create({
      name: "Noah Baumbach",
      categoryId: categories[23].id,
      movieId: movies[2].id
    }),
    Nominee.create({
      name: "Sam Mendes & Krysty Wilson-Cairns",
      categoryId: categories[23].id,
      movieId: movies[19].id
    }),
    Nominee.create({
      name: "Quentin Tarantino",
      categoryId: categories[23].id,
      movieId: movies[1].id
    }),
    Nominee.create({
      name: "Bong Joon Ho & Han Jin Won",
      categoryId: categories[23].id,
      movieId: movies[20].id
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
