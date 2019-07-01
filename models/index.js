const Sequelize = require("sequelize");

let sequelize;
const currentEnv = process.env.NODE_ENV || 'development'; 

if (currentEnv === "production") {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres"
  });
} else {
  sequelize = new Sequelize("booksapi", "postgres", "", {
    dialect: "postgres"
  });
}

const models = {
  Book: sequelize.import("./book"),
  Author: sequelize.import("./author")
};

Object.keys(models).forEach(key => {
  if ("associate" in models[key]) {
    models[key].associate(models);
  }
});

module.exports = {
  sequelize,
  ...models
};
