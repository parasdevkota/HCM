# Handmade Crafts Marketplace - Assessment 2

This is a full-stack web application for the Handmade Crafts Marketplace. It's built using the MERN stack (MongoDB, Express, React, Node.js) and features a custom UI to display craft items like pottery, jewelry, and art.

## Project Structure
- **/backend**: Node.js server, Express routes, and MongoDB models.
- **/frontend**: React.js application with a CSS grid for the marketplace.

## How to Run Locally

### 1. Backend Setup
1. Open your terminal and go into the backend folder: `cd backend`
2. Install the packages: `npm install`
3. Create a `.env` file and add your `MONGODB_URI`, `PORT=5001`, and `JWT_SECRET`.
4. Start the server: `npm start`

### 2. Frontend Setup
1. Open a second terminal window and go to the frontend folder: `cd frontend`
2. Install the packages: `npm install`
3. Start the React app: `npm start`
4. The app should open on `localhost:3000`.

## Key Features Implemented
- **Login/Register**: Users can create accounts and sign in (JWT based).
- **Marketplace Home**: A grid view that fetches live data from MongoDB Atlas.
- **Selling Items**: A form to add new craft listings to the database.
- **CI/CD**: GitHub Actions is set up to check the build every time a code is pushed.
