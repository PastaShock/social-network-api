const { findOneAndUpdate } = require('../models/user');
const User = require('../models/user');

module.exports = {
    getUsers(req, res) {
        User.find({})
            .populate({ path: 'thoughts', select: '-__v' })
            .populate({ path: 'friends', select: '-__v' })
            .then((users) => res.json(users))
            .catch((err) => {
                console.log(err);
                res.status(500).json(err)
            })
    },
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.id })
            .populate({ path: 'thoughts', select: '-__v' })
            .populate({ path: 'friends', select: '-__v' })
            .select('-__v')
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'no user with that id' })
                    : res.json(user)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // create a new user
    createUser(req, res) {
        // console.log(req.body)
        User.create(req.body)
            .then((dbUserData) => {
                res.status(200).json(dbUserData)
            })
            .catch((err) => res.status(500).json(err));
    },
    // update user
    updateUser(req, res) {
        User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'no user with that id' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    // delete user
    deleteUser(req, res) {
        User.deleteOne({ _id: req.params.id })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'no user with that id' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    }
};
