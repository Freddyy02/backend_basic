const { Router } = require("express");
const {
  userGet,
  userDelete,
  userPost,
  userPut,
} = require("../controllers/user");

const router = Router();

router.get("/", userGet);
router.put("/:userID", userPut);
router.post("/", userPost);
router.delete("/", userDelete);

module.exports = router;
