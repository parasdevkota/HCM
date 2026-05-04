const express = require('express');
const router = express.Router();

const { protect } = require('../middleware/authMiddleware'); 

const { 
    createListing, 
    getListings, 
    getListingById,
    updateListing,
    deleteListing
 } = require('../controllers/listingController');

router.get('/', getListings);
router.post('/', protect, createListing);
router.get('/:id', getListingById);
router.put('/:id', protect, updateListing);
router.delete('/:id', protect, deleteListing);

module.exports = router;