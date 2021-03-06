const { MongoClient, ObjectId } = require("mongodb");

let client;

const openDB = async () => {
  try {
    if (client) {
      return Promise.resolve(client);
    }

    const connection = await MongoClient.connect(process.env.ATLAS_LOGIN_URL, {
      useUnifiedTopology: true,
    });

    client = connection.db();

    console.log("Successfully connected to DB!");

    return client;
  } catch (err) {
    console.error("Error connecting: " + err);
  }

  return null;
};

const remove = async (table, id) => {
  const element = get(table, id);
  await client.collection(table).deleteOne({ _id: new ObjectId(id) });

  return element;
};

const get = async (table, id, limit) => {
  if (!id) {
    // by default .find() gives us a cursor, since it can be a huge list
    // but when we do toArray(), then that actually gets everything
    let cursor = client.collection(table).find();

    if (limit > 0) {
      cursor = cursor.limit(limit);
    }

    return cursor.toArray();
  }

  return client.collection(table).findOne({ _id: new ObjectId(id) });
  // find() gives us a cursor
  /*.find({ _id: new ObjectId(id) })
      .next() */
};

const getTable = (table) => {
  return client.collection(table);
};

const findMatches = async (table, ids) => {
  return client
    .collection(table)
    .find({ _id: { $in: ids } })
    .toArray();
};

const putAll = async (table, data) => {
  const { ops } = await client.collection(table).insertMany(data);
  return ops;
};

const put = async (table, model) => {
  if (model._id) {
    const copy = { ...model, _id: new ObjectId(model._id) };
    const { value } = await client
      .collection(table)
      .findOneAndReplace({ _id: copy._id }, copy);
    //.updateOne({ _id: copy._id }, { $set: copy });

    return value;
  }

  const result = await client.collection(table).insertOne(model);
  const { ops } = result;
  return ops[0];
};

module.exports = {
  findMatches,
  get,
  getTable,
  openDB,
  put,
  putAll,
  remove,
};
