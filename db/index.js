var mongoose = require('mongoose');
const User = require('./user');
mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log(`we're connected! to: mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);
});

const poopy = new User({name: 'poopy', email: 'poopy@gmail.com'});
// travis.report();

poopy.save((err, travis) => {
  if (err) return console.error(err);
  poopy.report();
});