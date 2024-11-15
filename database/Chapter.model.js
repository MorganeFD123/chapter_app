const { Schema, default: mongoose } = require("mongoose");

const ChapterSchema = new Schema({
    name: {type: String, required: true},
    numberOfLessons: {type: Number, required: true}
})

module.exports.Chapter = mongoose.model('chapter',  ChapterSchema)