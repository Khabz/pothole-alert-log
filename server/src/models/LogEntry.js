const mongoose = require('mongoose');

const { Schema } = mongoose;

const requiredNumber = {
    type: Number,
    required: true,
};

const logEntrySchema = new Schema({
    image: {
        type: String,
        required: false
    },
    fullnames: {
        type: String,
        required: true,
    },
    description: String,
    latitude: {
        ...requiredNumber,
        min: -90,
        max: 90,
    },
    longitude: {
        ...requiredNumber,
        min: -180,
        max: 180,
    },
    fixed: {
        type: Boolean,
        required: true,
        default: false
    },
}, {
    timestamps: true,
});

const LogEntry = mongoose.model('LogEntry', logEntrySchema);

module.exports = LogEntry;