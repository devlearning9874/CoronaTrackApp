const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const testSchema = new Schema({
    id:String,
    question:String,
    answer:String,
    option1:String,
    option2:String,
    option3:String,
    option4:String
});
//const que = mongoose.model("que", questionSchema);
module.exports = mongoose.model('question', testSchema, 'questions');