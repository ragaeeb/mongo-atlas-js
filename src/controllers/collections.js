const Collection = require("../models/Collection");

const getCollection = (req, res, next) => {
  res.status(200);
};

const createCollection = async (req, res, next) => {
  const { title, arabicTitle, author } = req.body;
  console.log("create", title, arabicTitle, author);
  const c = new Collection(title, arabicTitle, author);
  const newCollection = await c.save();
  console.log(newCollection);

  res.sendStatus(200);
};

module.exports = {
  createCollection,
  getCollection,
};
