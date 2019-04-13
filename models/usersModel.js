const mongoose = reuire('mongoose');
const Schema = mongoose.Schema;

//table

const userSchema = new Schema({
    email: {
        type: String,
        required : true,
        unique: true,
        lowercase : true
    },
    password : {
        type: String,
        required: true
    }
})

const User = mongoose.model('user', userSchema);
module.exports = User;