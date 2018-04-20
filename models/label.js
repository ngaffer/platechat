var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var labelSchema = new Schema({
	labelName: { type: String, unique: true },
	messages: [{ type: Schema.Types.ObjectId, ref: 'Message'}]
});

labelSchema.plugin(uniqueValidator);

mondule export = mongoose.model('Label', labelSchema);