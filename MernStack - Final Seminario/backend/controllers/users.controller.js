const usersCtrl = {};

const User = require('../models/user.model');

usersCtrl.getUsers = async (req, res) => {
        let filters = {};
        if(req.query){
            filters=req.query
        }
          const users = await User.find(filters);
          res.json(users);
  }

  usersCtrl.createUsers = async (req, res) => {
const { username, password } = req.body;
const newUser = new User({
    username,
    password
});

await newUser.save().
    then((data) => {
        console.log("saved data ", data);
        res.json({ message: 'User created!' });
    }).catch(function (error) {
        console.log(error);
        res.status(503).json({ message: 'User not created!' });
    });
}

usersCtrl.getUser = async (req, res) => {
  const user = await User.findById(req.params.id)
  res.json(user);
}


usersCtrl.updateUser = async (req, res) => {
  const { username, password } = req.body;
  await User.findOneAndUpdate({ _id: req.params.id }, {
    username,
    password
  }).
  then((data) => {
      console.log("saved data ", data);
      res.json({ message: 'User Updated!' });
  }).catch(function (error) {
      console.log(error);
      res.status(503).json({ message: 'User not updated!' });
  });
  
}

usersCtrl.deleteUser = async (req, res) => {
  await User.findOneAndDelete({ _id: req.params.id });
  res.json({ message: 'User Deleted' })
}

  module.exports = usersCtrl;