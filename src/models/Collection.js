const { get, put } = require("../utils/database");
class Collection {
  constructor(title, arabicTitle, author) {
    this.title = title;
    this.arabicTitle = arabicTitle;
    this.author = author;
  }

  async put() {
    return put("collections", this);
  }

  static async get(id) {
    return get("collections", id);
  }
}

module.exports = Collection;
