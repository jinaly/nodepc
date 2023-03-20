const { Model } = require("objection");

class Todos extends Model {
  static get tableName() {
    return "todos";
  }
}

module.export = { Todos };
