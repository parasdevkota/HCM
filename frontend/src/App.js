import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddListing from './components/AddListing';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Tasks from './pages/Tasks';

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
      </Routes>
    </Router>
  );
}

export default App;
