const UserModel = require('../model/User');
const User = new UserModel();
const jwt = require('jsonwebtoken')

module.exports = {
  register: async (req, res) => {
    const { email, password, fullname, gender, birthday } = req.body;
    if (password.length < 6) {
      return res.status(400).json({ message: "Password less than 6 characters" })
    }
    try {
      const user = await User.create(email, password, fullname, gender, birthday);
      if (typeof user == 'object') {

        return res.json({
          data: {
            email: user.email,
            fullname: user.fullname,
            gender: user.gender,
            birthday: user.birthday
          }
        })
      }}catch (error) {
        return res.json({
          message: 'Register fail',
          data: null
        })
      }
    },

    signIn : async (req, res) => { 
      if (!req.body.email ) {
       return  res.status(401).json({message: "Invalid email "}); 
      }
      if (!req.body.password ) {
        return  res.status(401).json({message: "Invalid password "}); 
       }
      
      const user = await User.login( req.body.email, req.body.password)
       console.log(user);
       if (!user)  return res.status(401).json({message: "account is not exsist"});

       const SCR_key = "@quy2144125"
       const SCR_key2 = "@quy2144125"


      const token = jwt.sign({email: user.email}, SCR_key,)
      jwt.verify(token, SCR_key, (err, result) => {
        console.log(err,1);
        console.log(result,2);
      })

      console.log(token); 
      return res.status(200).json({token: token})
    }
    }
  