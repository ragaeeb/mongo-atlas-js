const { get, getTable, put, remove } = require("../utils/database");
class Collection {
  constructor(title, arabicTitle, author, id) {
    this.title = title;
    this.arabicTitle = arabicTitle;
    this.author = author;
    this._id = id;
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

  static async getCollectionsUnderLibrary(library) {
    return getTable("collections").find({ "library.name": library }).toArray();
  }
}

module.exports = Collection;
