const express = require("express");
const router = express.Router();

const fileMiddleware = require("../middleware/file");
const { admin } = require("../middleware/admin");
const { auth } = require("../middleware/auth");
const {
  getAll,
  create,
  getByID,
  update,
  remove,
} = require("../controllers/items");

router.get("/", auth, getAll);
router.get("/:id", auth, getByID);

router.post("/", auth, fileMiddleware.single("image"), create);
router.put("/", auth, fileMiddleware.single("image"), update);
router.delete("/:id", auth, remove);

module.exports = router;
