const router = require("express").Router();
const {
  getAllUser,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require("./controller/userController");
const {getSearch} = require("./controller/searchController")

router.get("/", getAllUser);
router.get("/:id", getSingleUser);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);


module.exports = router;
