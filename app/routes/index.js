module.exports = function (app) {
  app.use("/users", require("./users"))
  app.use("/posts", require("./posts"))
  app.use("/likes", require("./like"))
  app.use("/comments", require("./comment"))
}