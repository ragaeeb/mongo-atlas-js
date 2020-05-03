const User = require("../models/User");

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

module.exports = {
  getUser,
};
