const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	password: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
	plates: [{ type: Schema.Types.ObjectId, ref: 'Plate' }]
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);