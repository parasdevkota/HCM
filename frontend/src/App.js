import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddListing from './components/AddListing';
import ListingDetail from './components/ListingDetail';
import EditListing from './components/EditListing';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Tasks from './pages/Tasks';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/add-listing" element={<AddListing />} />
        <Route path="/listing/:id" element={<ListingDetail />} />
        <Route path="/home" element={<Home />} />
        <Route path="/edit-listing/:id" element={<EditListing />} />
      </Routes>
    </Router>
  );
}

export default App;
