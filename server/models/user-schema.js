const monggose = require('mongoose');
const Scheme = mongoose.Schema;

let userSchema = new monggose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
  },
  {
    collection: 'users',
  },
);

module.exports = mongoose.model('User', userSchema);
