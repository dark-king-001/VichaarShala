var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Profile Schema
 */
var profileSchema = new Schema({
  fullName: {
    type: String,
    required: [true, "fullname not provided "],
  },
  email: {
    type: String,
    unique: [true, "email already exists in database!"],
    lowercase: true,
    trim: true,
    required: [true, "email not provided"],
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: '{VALUE} is not a valid email!'
    }

  },
  aboutMe:{
    type:String,
  },
  status:{
    type:String,
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Profile', profileSchema);