const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: String,
  email: String
})

userSchema.methods.report = () => {
  var report = this.name ? this.name : 'I don\'t have a name';
  console.log(report);
}

const User = mongoose.model('User', userSchema);
module.exports = User;