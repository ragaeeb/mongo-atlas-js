const { get, put } = require("../utils/database");

class User {
  constructor(username, logs, id) {
    this.username = username;
    this.logs = logs ? logs : [];
    this._id = id;
  }

  async put() {
    return put("users", this);
  }

  static async get(id) {
    return get("users", id);
  }
}

module.exports = User;
