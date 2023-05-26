let express = require('express'); //old type import express //new tpye-import express from 'express'
const { default: mongoose } = require('mongoose'); //
const app = express(); //express use in app
const router = require("./app/routes")
const bodyParser = require("body-parser")

app.use(bodyParser.json())

mongoose.connect("mongodb://127.0.0.1:27017/blog-dev").then(() => {
  console.log("connected to blog-dev!")
}).catch(err => console.log(err))

router(app);


app.listen("3000", () => {
  console.log("listening at port 3000") //old type port listion
})
//new type const port = process.env.PORT||'3000'
//app.listen(port, ()=>{console.log(`server listing at http://localhost:${port}`)})