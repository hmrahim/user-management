const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: Number,
    required: true,
    trim: true,
  },
});

userSchema.index({
  name:"text",
  username:"text"
},{
  weights:{
    name:5,
    username:5
  }
})

const User = model("User", userSchema);

module.exports = User;
