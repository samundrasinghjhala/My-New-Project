const { Comment } = require("../models")


//old exports type module.export
exports.index = async (req, res) => {
    try {
        const comments = await Comment.find().populate("user").populate("post");
        res.send(comments)
    }
    catch (err) {
        res.status(422).send({
            message: "Something went wrong!"
        })
    }
}

exports.create = async (req, res) => {
    try {
        const comment = await Comment.create({
            ...req.body
        })

        if (comment)
            res.send(comment)
    }
    catch (err) {
        res.status(422).send({
            message: err.message
        })
    }
}

exports.update = async (req, res) => {
    try {
        const comment = await Comment.updateOne({
            _id: req.params.id
        }, {
            ...req.body
        })

        if (comment)
            res.send(comment)
        else
            res.status(404).send({      //404 Not found
                message: `Comment not found by id ${req.params.id}`
            })
    }
    catch (err) {
        res.status(422).send({      //422-unprocessable Entity
            message: "Something went wrong!"
        })
    }
}

exports.destroy = async (req, res) => {
    try {
        const comment = await Comment.deleteOne({
            _id: req.params.id
        })

        if (comment)
            res.send(comment)
        else
            res.status(404).send({
                message: `Comment not found by id ${req.params.id}`
            })
    }
    catch (err) {
        res.status(422).send({
            message: "Something went wrong!"
        })
    }
}