const router = require("express").Router();
const exampleRoutes = require('./examples.js')
const blogRoutes = require('./blogs.js');

//  routes
router.use("/example",exampleRoutes)
router.use("/blogs",blogRoutes)
router.get("/api",(req, res) => {res.json("Hello API")})

module.exports = router;
