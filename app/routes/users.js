const { index, show, create, update, destroy } = require("../controllers/users") //import controllers in user route
const router = require("express").Router()

router.get("/", index) //get logic from controllers use the router
router.get("/:id", show)
router.post("/", create)
router.put("/:id", update)
router.delete("/:id", destroy)

module.exports = router