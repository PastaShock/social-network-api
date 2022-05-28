// **Thought**:
const  { Schema, model } = require('mongoose');
const Reaction = require('./reaction');

// * `thoughtText`
//   * String
//   * Required
//   * Must be between 1 and 280 characters
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            require: true,
            minLength: 1,
            maxLength: 280,
        },
// * `createdAt`
//   * Date
//   * Set default value to the current timestamp
//   * Use a getter method to format the timestamp on query
    createdAt: {
        type: Date,
        default: Date.now,
    },
// * `username` (The user that created this thought)
//   * String
//   * Required
    username: {
        type: String,
        required: true,
    },
// * `reactions` (These are like replies)
//   * Array of nested documents created with the `reactionSchema`
    reactions: [Reaction],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);


// **Schema Settings**:

// Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.

thoughtSchema
.virtual('getReactions')
.get( () => {
    // return this.reactions.length
    return 6
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;