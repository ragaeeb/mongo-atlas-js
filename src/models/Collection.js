const { getDB } = require("../utils/database");
class Collection {
  constructor(title, arabicTitle, author) {
    this.title = title;
    this.arabicTitle = arabicTitle;
    this.author = author;
  }

  async save() {
    const client = getDB();
    const result = await client.collection("collections").insertOne(this);
    return result;
  }

  static async fetchAll() {
    const client = getDB();

    // by default .find() gives us a cursor, since it can be a huge list
    // but when we do toArray(), then that actually gets everything
    const collections = await client.collection("collections").find().toArray();
    return collections;
  }
}

module.exports = Collection;
