const { Like } = require("../models")

exports.index = async (req, res) => {      //find all likes
    try {
        const likes = await Like.find().populate("user").populate("post");
        res.send(likes)
    }
    catch (err) {
        res.status(422).send({     //422-unprocessable Entity
            message: "Something went wrong!"
        })
    }
}

exports.create = async (req, res) => {
    try {
        const like = await Like.create({
            ...req.body
        })

        if (like)
            res.send(like)
    }
    catch (err) {
        res.status(422).send({
            message: err.message
        })
    }
}

exports.update = async (req, res) => {
    try {
        const like = await Like.updateOne({
            _id: req.params.id
        }, {
            ...req.body
        })

        if (like)
            res.send(like)
        else
            res.status(404).send({      //404 Not found
                message: `Like not found by id ${req.params.id}`
            })
    }
    catch (err) {
        res.status(422).send({
            message: "Something went wrong!"
        })
    }
}

exports.destroy = async (req, res) => {
    try {
        const like = await Like.deleteOne({
            _id: req.params.id
        })

        if (like)
            res.send(like)
        else
            res.status(404).send({
                message: `Like not found by id ${req.params.id}`
            })
    }
    catch (err) {
        res.status(422).send({
            message: "Something went wrong!"
        })
    }
}