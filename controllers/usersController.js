const User = require('../models/usersModel');

module.exports = {
    signUp: async (req, res, next) => {
        //console.log("usersController signUp()");

        const {email, password} = req.value.body;

        const foundUser = await User.findOne({email});
        if(foundUser){
            return res.status(403).json({error: 'Email is already in use'});
        }
    
        //create a new usre
        const newUser = new User({email, password});
        await newUser.save();

        //response with token
        res.status(200).json({user: 'created'});
    },
    
    signIn: async (req, res, next) => {
        console.log("usersController signIn()");
    },

    secret: async (req, res, next) => {
        console.log("usersController secret()");
    }

}
