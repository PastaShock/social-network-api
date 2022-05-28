const router = require('express').Router();
const { getUsers, getSingleUser, createUser, updateUser, deleteUser } = require('../../controller/userController');

// **`/api/users`**

// * `GET` all users
// * `POST` a new user:
    // ```json
    // // example data
    // {
    //   "username": "lernantino",
    //   "email": "lernantino@gmail.com"
    // }
    // ```
router.route('/').get(getUsers).post(createUser);

// * `GET` a single user by its `_id` and populated thought and friend data
// * `PUT` to update a user by its `_id`
// * `DELETE` to remove user by its `_id`
router.route('/:id').get(getSingleUser).put(updateUser).delete(deleteUser);

// **BONUS**: Remove a user's associated thoughts when deleted.
// **`/api/users/:userId/friends/:friendId`**

// * `POST` to add a new friend to a user's friend list

// * `DELETE` to remove a friend from a user's friend list

module.exports = router;