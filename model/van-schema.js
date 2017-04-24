var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var vanSchema = new Schema({
    vanOwner:{
        type: String,
        required: true,
        unique: true
    },
    vanName: String,
    year: Number,
    make: String,
    model: [String],
    mileage: Number,
    mechanicalMods: [String],
    interiorMods: [String],
    exteriorMods: [String],
    pics: {
        type: String
    },
    comments: [String]
});

var Van = mongoose.model("Van", vanSchema);

module.exports = Van;