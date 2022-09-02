const router = require("express").Router()
const {getSearch} = require("./controller/searchController")

router.get("/",getSearch)

module.exports = router