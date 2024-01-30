const router = require("express").Router();
const user = require("../controllers/users");

router.post("/register", user.createUser);
router.post("/login", user.loginUser);

module.exports = router;
