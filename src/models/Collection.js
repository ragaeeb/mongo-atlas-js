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
}

module.exports = Collection;
