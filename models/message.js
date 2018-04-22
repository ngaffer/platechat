const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
	content: { type: String, required: true },
	user: { type: Schema.Types.ObjectId, ref: 'User' },
	labels [{ type: String }],
	recipient: { type: String },
	parentMessage: { type: Schema.Types.ObjectId, ref: 'Message'}
});

module.exports = mongoose.model('Message', messageSchema);