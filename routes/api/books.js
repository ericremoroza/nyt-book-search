const router = require("express").Router();
const bookControl = require("../../controllers/bookControl");

router.route("/")
.get(bookControl.findAll)
.post(bookControl.create);

module.exports = router;