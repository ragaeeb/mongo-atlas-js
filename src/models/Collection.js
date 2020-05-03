const { getDB } = require("../utils/database");

module.exports = class Collection {
  constructor(title, arabicTitle, author) {
    this.title = title;
    this.arabicTitle = arabicTitle;
    this.author = author;
  }

  save() {
    const client = getDB();
    console.log("*** GOIng to save...");
  }
};
