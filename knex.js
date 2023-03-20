module.exports = require("knex")({
  client: "mysql",
  connection: {
    host: "localhost",
    user: "root",
    port: 3306,
    password: "",
    database: "nodepc",
  },
});
