const express = require("express");
const {
  createCollection,
  deleteCollection,
  getCollection,
  getCollections,
} = require("../controllers/collections");
const router = express.Router();

router.get("/", getCollections);

// order matters, this needs to come after the / GET
router.get("/:id", getCollection);
router.post("/", createCollection);
router.delete("/:id", deleteCollection);

module.exports = router;
