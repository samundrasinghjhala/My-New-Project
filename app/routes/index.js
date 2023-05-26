module.exports = function (app) {
  app.use("/users", require("./users"))   //use routes in app
  app.use("/posts", require("./posts"))
  app.use("/likes", require("./like"))
  app.use("/comments", require("./comment"))
}