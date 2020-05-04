const Collection = require("../models/Collection");

const deleteCollection = async (req, res) => {
  const collections = await Collection.delete(req.params.id);
  res.json(collections);
};

const getCollection = async (req, res) => {
  const collections = await Collection.get(req.params.id);
  res.json(collections);
};

const getCollections = async (req, res) => {
  const collections = await Collection.get();
  res.json(collections);
};

const getCollectionsUnderLibrary = async (req, res) => {
  const collections = await Collection.getCollectionsUnderLibrary(
    req.params.name
  );

  res.json(collections);
};

const createCollection = async (req, res) => {
  const { title, arabicTitle, author, titles } = req.body;

  if (Array.isArray(titles) && titles.length > 0) {
    const result = await Collection.putAll(titles);

    result.forEach(({ _id }) => {
      req.user.logs.push({
        type: "Created",
        model: "Collections",
        key: _id,
      });
    });

    await req.user.put();
    res.json(result);
  } else {
    const c = new Collection(title, arabicTitle, author);
    const newCollection = await c.put();

    req.user.logs.push({
      type: "Created",
      model: "Collections",
      key: newCollection._id,
    });
    await req.user.put();
    res.json(newCollection);
  }
};

const updateCollection = async (req, res) => {
  const { title, arabicTitle, author } = req.body;
  const { id } = req.params;
  console.log("update", id, title, arabicTitle, author);
  const c = new Collection(title, arabicTitle, author, id);
  const updatedCollection = await c.put();

  res.json(updatedCollection);
};

module.exports = {
  deleteCollection,
  createCollection,
  getCollectionsUnderLibrary,
  getCollection,
  getCollections,
  updateCollection,
};
