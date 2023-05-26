const { User } = require("../models")

exports.index = async (req, res) => {
  try {
    const users = await User.find() //find all users
    res.send(users)
  }
  catch (err) {
    res.status(422).send({         //422-unprocessable Entity
      message: "Something went wrong!"
    })
  }
}

exports.show = async (req, res) => {
  try {
    const user = await User.findOne({  //find one user
      _id: req.params.id
    })

    if (user)
      res.send(user)
    else
      res.status(404).send({     //404 Not found
        message: `User not found by id ${req.params.id}`
      })
  }
  catch (err) {
    res.status(422).send({       //422-unprocessable Entity
      message: "Something went wrong!"
    })
  }
}

exports.create = async (req, res) => {
  try {
    const user = await User.create({
      ...req.body
    })

    if (user)
      res.send(user)
  }
  catch (err) {
    res.status(422).send({     //422-unprocessable Entity
      message: err.message
    })
  }
}

exports.update = async (req, res) => {
  try {
    const user = await User.updateOne({
      _id: req.params.id
    }, {
      ...req.body
    })

    if (user)
      res.send(user)
    else
      res.status(404).send({       //404 Not found
        message: `User not found by id ${req.params.id}`
      })
  }
  catch (err) {
    res.status(422).send({     //422-unprocessable Entity
      message: "Something went wrong!"
    })
  }
}

exports.destroy = async (req, res) => {
  try {
    const user = await User.deleteOne({  //delete one user
      _id: req.params.id
    })

    if (user)
      res.send(user)
    else
      res.status(404).send({      //404 Not found
        message: `User not found by id ${req.params.id}`
      })
  }
  catch (err) {
    res.status(422).send({     //422-unprocessable Entity
      message: "Something went wrong!"
    })
  }
}