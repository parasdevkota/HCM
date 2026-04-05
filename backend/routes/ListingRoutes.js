const express = require('express');
const router = express.Router();

const { createListing, getListings } = require('../controllers/listingController');


const { protect } = require('../middleware/authMiddleware');

// if it's a POST request to /api/listings, run createListing
// if it's a GET request to /api/listings, run getListings

router.route('/')
  .post(protect, createListing) // for saving a new craft
  .get(protect, getListings);   // for loading the dashboard

module.exports = router;