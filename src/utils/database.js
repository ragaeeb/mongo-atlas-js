const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let client;

const openDB = async () => {
  try {
    if (client) {
      return Promise.resolve(client);
    }

    client = await MongoClient.connect(process.env.ATLAS_LOGIN_URL, {
      useUnifiedTopology: true,
    });

    console.log("Successfully connected to DB!");

    return client;
  } catch (err) {
    console.error("Error connecting: " + err);
  }

  return null;
};

const getDB = () => client;

module.exports = {
  getDB,
  openDB,
};
