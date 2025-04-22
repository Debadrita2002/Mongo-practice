const express = require('express')
const app = express();
const userModel = require("./models/user")
const postModel = require("./models/post")

app.get("/",function(req,res) {
    res.send("hijlohh")
})
app.get("/create",async (req,res)=>{
    let user=await userModel.create({
        username: "debadrita",
        age: 23,
        email : "d@u.com"
    });
    res.send(user)
})
app.get("/post/create",async (req,res)=>{
    let post=await postModel.create({
        postdata: "heloooo cutututututu",
        user:"6807a69b3ea50542131cb069",
        
    });
    let user= await userModel.findOne({_id:"6807a69b3ea50542131cb069"})
    user.posts.push(post._id);
    await user.save();

    res.send({post,user})
})

app.listen(3002)