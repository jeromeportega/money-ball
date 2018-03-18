const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    googleId: String,
    first_name: String,
    last_name: String,
    email: String,
});

mongoose.model('users', UserSchema);
