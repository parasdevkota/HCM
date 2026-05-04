import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        alert("You have been logged out.");
        navigate('/login');
    };

    return (
        <nav className="bg-blue-600 text-white shadow-lg p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/home" className="text-xl font-bold tracking-tight hover:text-blue-100 transition-colors">
                    Handmade Crafts Marketplace
                </Link>

                <div className="space-x-6 flex items-center">
                    <Link to="/home" className="hover:text-blue-200 transition-colors">View Shop</Link>

                    {user ? (
                        <>
                            <Link to="/add-listing" className="hover:text-blue-200 transition-colors">Sell Items</Link>
                            <Link to="/profile" className="hover:text-blue-200 transition-colors">My Profile</Link>
                            <button 
                                onClick={handleLogout}
                                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-semibold transition-all shadow-sm"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="hover:text-blue-200 transition-colors">Login</Link>
                            <Link to="/register" className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-blue-50 transition-all shadow-sm">
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;