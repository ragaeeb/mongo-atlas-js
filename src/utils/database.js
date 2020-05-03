const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

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
  await client.collection(table).deleteOne({ _id: new mongodb.ObjectId(id) });

  return element;
};

const get = async (table, id) => {
  if (!id) {
    // by default .find() gives us a cursor, since it can be a huge list
    // but when we do toArray(), then that actually gets everything
    return client.collection(table).find().toArray();
  }

  return (
    client
      .collection(table)
      // find() gives us a cursor
      .find({ _id: new mongodb.ObjectId(id) })
      .next()
  );
};

const put = async (table, model) => {
  const result = await client.collection(table).insertOne(model);
  const { ops } = result;
  return ops[0];
};

module.exports = {
  get,
  openDB,
  put,
  remove,
};
