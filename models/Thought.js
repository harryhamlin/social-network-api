const { Schema, model } = require('mongoose');
const reaction = require('./Reaction')

const thoughtSchema = new Schema(
    {
        thoughtText: { Type: String, required: true },
        createdAt: { Type: String, required: true, unique: true },
        username: {
            type: Schema.Types.ObjectId,
            ref: 'user'
        }
        ,
        reactions: [reaction]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
)

thoughtSchema.virtual('reactionCount')
    .get(function () {
        return this.reactions.length
    });

const Thought = model('thought', thoughtSchema);

module.exports = Thought