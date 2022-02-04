const router = require("express").Router()                    //Router

router.get("/", (req, res) => {
    res.send("user route")
})

module.exports = router