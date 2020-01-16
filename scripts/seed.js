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
    Movie.create({ title: "Pain and Glory" }),
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
    Movie.create({ title: "Parasite" }),
    Movie.create({ title: "American Factory" }),
    Movie.create({ title: "The Cave" }),
    Movie.create({ title: "The Edge of Democracy" }),
    Movie.create({ title: "For Sama" }),
    Movie.create({ title: "Honeyland" }),
    Movie.create({ title: "In the Absence" }),
    Movie.create({
      title: "Learning to Skateboard in a Warzone (If You're A Girl)"
    }),
    Movie.create({ title: "Life Overtakes Me" }),
    Movie.create({ title: "St. Louis Superman" }),
    Movie.create({ title: "Walk Run Cha-Cha" }),
    Movie.create({ title: "Ford V Ferrari" }),
    Movie.create({ title: "Corpus Christi" }),
    Movie.create({ title: "Les Misérables" }),
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

  const nominees = await Promise.all([]);

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
