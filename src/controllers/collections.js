const Collection = require("../models/Collection");

const deleteCollection = async (req, res, next) => {
  const collections = await Collection.delete(req.params.id);
  res.json(collections);
};

const getCollection = async (req, res, next) => {
  const collections = await Collection.get(req.params.id);
  res.json(collections);
};

const getCollections = async (req, res, next) => {
  const collections = await Collection.get();
  res.json(collections);
};

const createCollection = async (req, res, next) => {
  const { title, arabicTitle, author } = req.body;
  console.log("create", title, arabicTitle, author);
  const c = new Collection(title, arabicTitle, author);
  const newCollection = await c.put();

  res.json(newCollection);
};

module.exports = {
  deleteCollection,
  createCollection,
  getCollection,
  getCollections,
};
