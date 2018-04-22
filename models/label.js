const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const labelSchema = new Schema({
	labelName: { type: String, unique: true },
	messages: [{ type: Schema.Types.ObjectId, ref: 'Message'}]
});

labelSchema.plugin(uniqueValidator);

mondule export = mongoose.model('Label', labelSchema);