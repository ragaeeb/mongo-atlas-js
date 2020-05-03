const Collection = require("../models/Collection");

const getCollections = async (req, res, next) => {
  const collections = await Collection.fetchAll();
  res.json(collections);
};

const createCollection = async (req, res, next) => {
  const { title, arabicTitle, author } = req.body;
  console.log("create", title, arabicTitle, author);
  const c = new Collection(title, arabicTitle, author);
  const { ops } = await c.save();

  const newCollection = ops[0];

  res.json(newCollection);
};

module.exports = {
  createCollection,
  getCollections,
};
