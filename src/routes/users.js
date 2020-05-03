const express = require("express");
const { getUserCollections } = require("../controllers/users");
const router = express.Router();

router.get("/:id/collections", getUserCollections);

module.exports = router;
