const User = require("../models/User");
const { findMatches } = require("../utils/database");

const getUser = async (req, res, next) => {
  try {
    const user = await User.get("5eaee4cf3557bf68c383f147");

    if (!user) {
      console.error("User not found!");
      return;
    }

    console.log("Found user: " + JSON.stringify(user));
    req.user = new User(user.username, user.logs, user._id);
    next();
  } catch (err) {
    console.error(err);
  }
};

const getUserCollections = async (req, res) => {
  const collectionIds = req.user.logs
    .filter(({ model, type }) => model === "Collections" && type === "Created")
    .map(({ key }) => key);

  const collections = await findMatches("collections", collectionIds);

  res.json(collections);
};

module.exports = {
  getUser,
  getUserCollections,
};
