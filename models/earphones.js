const mongoose = require("mongoose")
const earphonesSchema = mongoose.Schema({
earphone_name: {
    type: String,
    required: true,
    unique: true,
    minLength: [4, "Earphone name is not valid"],
  },
earphone_shape: {
    type: String,
    required: true,
    minLength: [1, "Earphone Shape is not valid"],
  },
earphone_radius: {
    type: Number,
    required: true,
    min: [2, "Earphone Radius is nt valid"],
  },
})
module.exports = mongoose.model("earphones",
earphonesSchema)