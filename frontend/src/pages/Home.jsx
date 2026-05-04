import React, { useEffect, useState } from 'react';
import axiosInstance from '../axiosConfig';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Home = () => {
    const [listings, setListings] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        const fetchListings = async () => {
            try {
                const res = await axiosInstance.get('/api/listings');
                setListings(res.data);
            } catch (err) {
                console.error("Failed to fetch listings");
            }
        };
        fetchListings();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this item?")) {
            try {
                await axiosInstance.delete(`/api/listings/${id}`);
                setListings(listings.filter((listing) => listing._id !== id));
            } catch (error) {
                alert('Failed to delete listing.');
            }
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen p-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Discover Handmade Crafts</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {listings.map(item => (

                        <div key={item._id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
                            <img src={item.imageUrl || 'https://via.placeholder.com/300'} alt={item.title} className="w-full h-48 object-cover shrink-0" />
                            
                            <div className="p-4 flex flex-col h-full">
                                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{item.category}</span>
                                <h3 className="mt-1 text-lg font-bold text-gray-900">{item.title}</h3>
                                <p className="text-gray-600 text-sm h-10 overflow-hidden mt-2">{item.description}</p>
                                
                                <div className="mt-auto pt-4"> 
                                    <div className="flex justify-between items-center">
                                        <Link 
                                            to={`/listing/${item._id}`} 
                                            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-semibold shadow-sm transition-colors text-center">
                                            View Details
                                        </Link>
                                    </div>
                                    
                                    {/* only visible to logged in users */}
                                    {user && (
                                        <div className="mt-4 pt-3 flex justify-end space-x-3 border-t border-gray-100">
                                            <Link 
                                                to={`/edit-listing/${item._id}`} 
                                                className="text-gray-500 hover:text-blue-600 text-sm font-medium transition-colors">
                                                Edit
                                            </Link>
                                            <button 
                                                onClick={() => handleDelete(item._id)} 
                                                className="text-gray-500 hover:text-red-600 text-sm font-medium transition-colors">
                                                Delete
                                            </button>
                                        </div>
                                    )}
                                </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;