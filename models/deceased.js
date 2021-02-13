const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const deceasedSchema = new Schema({
    patientId: String,
        reportedOn: String,
        onsetEstimate: String,
        ageEstimate: String,
        gender: String,
        city: String,
        district:String,
        state: String,
        status: String,
        notes: String,
        contractedFrom: String
});
//const que = mongoose.model("que", questionSchema);
module.exports = mongoose.model('decease', deceasedSchema, 'deceased');