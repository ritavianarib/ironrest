const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name: { type: String, required: true, trim: true },
  phone: {type: Number, required: true, unique: true}, 
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  passwordHash: { type: String, required: true },
  role: {
    type: String,
    enum: ["ADMIN", "USER"],
    required: true,
    default: "USER",
  },
  tour: [{ type: mongoose.Types.ObjectId, ref: "Tour" }],
});

const UserModel = model("User", UserSchema);

module.exports = UserModel;
