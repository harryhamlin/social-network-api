const { Schema, model } = require('mongoose');
const reaction = require('./Reaction');
const format = require('../utils/format');

const thoughtSchema = new Schema(
    {
        thoughtcontent: {
            type: String,
            required: true,
            min: 1,
            max: 280
        },
        createdat: {
            type: Date,
            default: Date.now,
            get: format
        },
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
            getters: true
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