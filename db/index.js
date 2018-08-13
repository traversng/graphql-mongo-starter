var mongoose = require('mongoose');
const User = require('./user/index');
mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log(`we're connected! to: mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);
});

const travis = new User({email: 'travis@gmail.com', passwordHash: 'qwrtuip12'});
// travis.report();
// travis.hashPassword(travis.passwordHash);
console.log('travis.hashPassword(travis.passwordHash);: ', travis.hashPassword(travis.passwordHash));

travis.save((err, travis) => {
  if (err) return console.error(err);
  console.log('travis: ', travis);
});