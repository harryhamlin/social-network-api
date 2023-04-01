const { Schema, model } = require('mongoose');
const reaction = require('./Reaction')

const thoughtSchema = new Schema(
    {
        thoughtText: { Type: String },
        createdAt: { Type: Date },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
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