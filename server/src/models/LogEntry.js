var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const requiredString = {
    type: String,
    required: true
};

const requiredNumber = {
    type: Number,
    required: true
};

var logEntrySchema = new Schema({
    title: requiredString,
    decription: String,
    image: requiredString,
    comments: {
        type: String
    },
    rating: {
        type: Number,
        min: 0,
        max: 10,
        default: 0
    },
    latitude: {
        ...requiredNumber,
        min: -90,
        max: 90
    },
    longitude: {
        ...requiredNumber,
        min: -180,
        max: 180
    },
    created_by: requiredString,
    fixed: {
        type: Boolean,
        default: false,
        required: true
    }
}, {
    timestamps: true,
});

const LogEntry = mongoose.model('LogEntry', logEntrySchema);

module.exports = LogEntry;