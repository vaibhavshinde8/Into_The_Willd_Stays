const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    tour: { type: mongoose.Schema.Types.ObjectId, ref: 'Tour', required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true }
})

module.exports = mongoose.model('Review', reviewSchema);