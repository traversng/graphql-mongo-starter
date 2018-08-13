const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  passwordHash: {
    required: true,
    type: String
  }
})

userSchema.methods = {
  authenticate(plainTextPassword) {
    return bcrypt.compareSync(plaintTextPassword, this.passwordHash);
  },
  hashPassword(plainTextPassword) {
    if (plainTextPassword) {
      const salt = bcrypt.genSaltSync(10);
      return bcrypt.hashSync(plainTextPassword, salt);
    }
    throw new Error('could not save user! no plainTextPassword provided')
  }
}

const User = mongoose.model('User', userSchema);
module.exports = User;