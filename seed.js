const { Author, Book } = require("./models");

const createAuthorsAndBooks = async () => {
  await Author.create(
    {
      name: "George Orwell",
      books: [
        { title: "Animal Farm" },
        { title: "1984" },
        { title: "Homage to Catalonia" },
        { title: "The Road to Wigan Pier" }
      ]
    },
    { include: [Book] }
  );

  await Author.create(
    {
      name: "Aldous Huxley",
      books: { title: "Brave New World" }
    },
    { include: [Book] }
  );

  await Author.create(
    {
      name: "Ray Bradbury",
      books: [{ title: "Fahrenheit 451" }]
    },
    { include: [Book] }
  );
};

module.exports = createAuthorsAndBooks;
