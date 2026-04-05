
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const listingRoutes = require('./routes/listingRoutes');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/auth', require('./routes/authRoutes'));
//app.use('/api/Listings', require('./routes/ListingRoutes'));
app.use('/api/listings', listingRoutes);
//app.use('/api/tasks', require('./routes/taskRoutes'));

// Export the app object for testing
if (require.main === module) {
    connectDB();

    const PORT = process.env.PORT || 5001;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  }


module.exports = app
