const { get, put, remove } = require("../utils/database");
class Collection {
  constructor(title, arabicTitle, author) {
    this.title = title;
    this.arabicTitle = arabicTitle;
    this.author = author;
  }

  static async delete(id) {
    return remove("collections", id);
  }

  async put() {
    return put("collections", this);
  }

  static async get(id) {
    return get("collections", id);
  }
}

module.exports = Collection;
