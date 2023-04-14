const mongoose = require("mongoose")
const earphonesSchema = mongoose.Schema({
earphone_name: String,
earphone_shape: String,
earphone_radius: Number
})
module.exports = mongoose.model("earphones",
earphonesSchema)