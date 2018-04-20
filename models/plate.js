var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var plateSchema = new Schema({
	plateNumber: { type: Number, required: true },
	plateState: { type: String, required: true },
	user: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Plate', plateSchema);