var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema({
	content: { type: String, required: true },
	user: { type: Schema.Types.ObjectId, ref: 'User' },
	labels [{ type: String }],
	recipient: { type: String },
	parentMessage: { type: Schema.Types.ObjectId, ref: 'Message'}
});

module.exports = mongoose.model('Message', messageSchema);