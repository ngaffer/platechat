const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const plateSchema = new Schema({
	plateNumber: { type: Number, required: true },
	plateState: { type: String, required: true },
	user: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Plate', plateSchema);