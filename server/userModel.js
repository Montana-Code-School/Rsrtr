const mongoose = require('mongoose');

const user = mongoose.Schema({
  name: String,
  guest: Boolean,
  fbID: {type: String, unique: true} //if they check out as guest, this will probably be an empty string or something

  filters: {
    filter1: String,
    filter2: String,
    filter3: String,
    filter4: String
  } //I do not yet know if this works, or if we will use a "schema inside a schema"
});

const UserModel = mongoose.model('User', user);

module.exports = UserModel;
