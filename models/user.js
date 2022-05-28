// **User**:

const { Schema, model } = require("mongoose");

// * `username`
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'thought'
        }],
// * `friends`
//   * Array of `_id` values referencing the `User` model (self-reference)
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'user',
        }]
    },
    {
        // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
        // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
)

// **Schema Settings**:

userSchema
// Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.
.virtual('friendCount')
.get( () => {
    // return this.friends.length || 0;
    return `5`
})

const User = model('user', userSchema);

module.exports = User;