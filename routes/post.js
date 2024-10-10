const router = require("express").Router();
const {publicPosts,privatePosts} = require("../db/Post.js");
const JWT = require("jsonwebtoken");
const checkJWT = require("../middleware/checkJWT.js");

router.get("/", (req,res) =>{
  res.send("Hello Postjs");
})

//誰でも見れる記事閲覧用のAPI
router.get("/public",(req,res)=>{
  res.json(publicPosts);
  // res.send(publicPosts);
})

//JWTを持っている人用のAPI

router.get("/private",checkJWT,
  (req,res) => {
    console.log("User accessing private posts:", req.user);
  res.json(privatePosts);
})


module.exports = router;
