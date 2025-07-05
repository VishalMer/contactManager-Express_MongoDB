const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type:String,
        required:[true,"Please add the contact name"],
    },
    email: {
        type:String,
        required:[true,"Please add the contact email"],
        unique:[true, "Email already taken"],
    },
    password: {
        type:String,
        required:[true,"Please add the contact password"],
    },
  }, 
  {
    Timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);