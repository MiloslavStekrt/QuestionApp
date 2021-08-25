import mongoose from "mongoose";

const Quize = new mongoose.Schema({
    author: String,
    name: String,
    questions: {
        _id: false,
        type: [{
            title: String,
            correct: String,
            answers: {
                _id: false,
                type: [{
                    text: String,
                    uuid: String
                }]
            }
        }]
    }
})
module.exports = mongoose.model("quiz", Quize)