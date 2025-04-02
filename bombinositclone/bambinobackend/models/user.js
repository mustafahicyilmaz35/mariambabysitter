const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    role: { type: String, enum: ["parent", "sitter"], required: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: String,
    address: String,
    experience: Number,
    bio: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
