const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: String,
    fullname: String,
    gender: String,
    birthday: Date
  });


class User {
    create(email, password, fullname, gender, birthday) {
      return UserModel.create({ email, password, fullname, gender, birthday })
        .then(result => result)
    }
    login(email, password) {
      return UserModel.findOne({ email, password })
      .then(result => result)
  }}

const UserModel = mongoose.model('User', userSchema);
module.exports = User;