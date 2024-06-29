const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const complainSchema = new Schema({
    employeeId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }, // References Users collection
    description: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    severity: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['submitted', 'pending', 'resolved', 'rejected'],
        required: true,
        default: 'submitted'
    }, // Can be "submitted", "pending", "resolved", "rejected"
    assignedTo: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }, // References Users collection (for HR or department)
    assignedAt: {
        type: Date
    },
    resolvedAt: {
        type: Date
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    attachments: [{
        type: String
    }] // Array of file paths or URLs
});

const Complain = mongoose.model('Complain', complainSchema);

module.exports = Complain;
