const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
  },
  price: { 
    type: Number, 
    required: true 
  },
  category: { 
    type: String, 
    required: true 
  },
  imageUrl: { 
    type: String 
  },
  
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    required: true, 
    ref: 'User' 
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Listing', listingSchema);