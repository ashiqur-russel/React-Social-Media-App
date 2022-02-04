const router = require("express").Router()                    //Router

router.get("/", (req, res) => {
    res.send("Auth route")
})

module.exports = router