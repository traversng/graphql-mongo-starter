import mongoose from 'mongoose'
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    required: true,
    type: String
  }
})

userSchema.methods = {
  authenticate(plainTextPassword) {
    return bcrypt.compareSync(plaintTextPassword, this.password);
  },
  hashPassword(plainTextPassword) {
    if (plainTextPassword) {
      const salt = bcrypt.genSaltSync(10);
      return bcrypt.hashSync(plainTextPassword, salt);
    }
    throw new Error('could not save user! no plainTextPassword provided')
  }
}

export const User = mongoose.model('User', userSchema);;