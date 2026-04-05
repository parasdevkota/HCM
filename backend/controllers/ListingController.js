const Listing = require('../models/Listing');

// Logic to create a new craft listing
exports.createListing = async (req, res) => {
    try {
        const newListing = new Listing({
            ...req.body,
            user: req.user.id 
        });
        const savedListing = await newListing.save();
        res.status(201).json(savedListing);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Logic to fetch all listings
exports.getListings = async (req, res) => {
    try {
        const listings = await Listing.find().populate('user', 'name');
        res.status(200).json(listings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};