const express = require("express");
const knex = require("./knex");
const bodyparser = require("body-parser");
const { Model } = require("Objection");
const { Todos } = require("./model");
const Port = process.env.PORT || 2000;

const app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, x-requested-with");
  next();
});

app.use(bodyparser.json());
Model.knex(knex);

app.get("/list", async (req, res) => {
  const List = await knex.raw(`Select id,firstname,email From todos`);
  let user = {};
  if (List.length) {
    user = List[0];
  }
  console.log(List, "list");
  res.json(user);
});

app.delete("/list/:id", async (req, res) => {
  const Del = await knex.raw(
    `DELETE From todos WHERE id = "${req.params.id}" `
  );
  console.log(Del);
  return res.json("DELETE");
});

// app.get("/list/:id", async (req, res) => {
//   const users = await Todos.query().findById(req.params.id);
//   res.json(users);
// });

app.get("/list/:id", async (req, res) => {
  const ListById = await knex.raw(
    `SELECT id,firstname,email From todos where id="${req.params.id}"`
  );
  // let user = {};
  // if (ListById.length) {
  //   user = ListById[0][0];
  // }
  res.json(ListById);
  console.log(ListById, "ListById");
});

app.listen(Port, (req, res) => {
  console.log(`server started port ${Port}`);
});
