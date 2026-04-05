const express = require('express');
const router = express.Router();

const { protect } = require('../middleware/authMiddleware'); 

const { createListing, getListings } = require('../controllers/listingController');

// GET is public, POST is private 
router.get('/', getListings);
router.post('/', protect, createListing);

module.exports = router;