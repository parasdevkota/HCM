const Listing = require('../models/Listing');

// adding a new item from front end
const createListing = async (req, res) => {
  try {
    const { title, price, category, imageUrl } = req.body;

    const listing = await Listing.create({
      title,
      price,
      category,
      imageUrl,

      user: req.user.id  //attaching the user log in id to connect item with user
    });

    //success
    res.status(201).json(listing);
  } catch (error) {
    //throwing error if it fails
    res.status(400).json({ message: 'Could not save item', error: error.message });
  }
};

const getListings = async (req, res) => {
  try {
    //getting all items listed by this user ids from data base
    const listings = await Listing.find({ user: req.user.id });
    
    res.status(200).json(listings);
  } catch (error) {
    res.status(400).json({ message: 'Failed to get items' });
  }
};

module.exports = {
  createListing,
  getListings
};