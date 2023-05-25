let express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const router = require("./app/routes")
const bodyParser = require("body-parser")

app.use(bodyParser.json())

mongoose.connect("mongodb://localhost:27017/blog-dev").then(() => {
  console.log("connected to blog-dev!")
}).catch(err => console.log(err))

router(app);


app.listen("3009", () => {
  console.log("listening at port 3009")
})