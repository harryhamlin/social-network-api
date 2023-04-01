const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: { Type: String },
        email: { Type: String },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thought'
            }
        ],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: this
        }
        ]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
)

userSchema.virtual('friendCount')
    .get(function () {
        return this.friends.length
    });

const User = model('user', userSchema);

module.exports = User