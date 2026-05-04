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

// Fetching a single listing by ID
exports.getListingById = async (req, res) => {
    try {
        const listing = await Listing.findById(req.params.id).populate('user', 'name');
        if (!listing) return res.status(404).json({ message: 'Listing not found' });
        res.status(200).json(listing);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Udate listing
exports.updateListing = async (req, res) => {
    try {
        const listing = await Listing.findById(req.params.id);
        if (!listing) return res.status(404).json({ message: 'Listing not found' });

        // Check if user owns this listing
        if (listing.user.toString() !== req.user.id) {
            return res.status(401).json({ message: 'User not authorized to edit this listing' });
        }

        const updatedListing = await Listing.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedListing);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete Lisiting
exports.deleteListing = async (req, res) => {
    try {
        const listing = await Listing.findById(req.params.id);
        if (!listing) return res.status(404).json({ message: 'Listing not found' });

        // Check if user owns this listing??
        if (listing.user.toString() !== req.user.id) {
            return res.status(401).json({ message: 'User not authorized to delete this listing' });
        }

        await listing.deleteOne();
        res.status(200).json({ message: 'Listing removed successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};