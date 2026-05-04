import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosConfig';

const ListingDetail = () => {
    const { id } = useParams(); // Grabs the ID from the URL
    const navigate = useNavigate();
    const [listing, setListing] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchListing = async () => {
            try {
                const res = await axiosInstance.get(`/api/listings/${id}`);
                setListing(res.data);
                setLoading(false);
            } catch (err) {
                console.error("Failed to fetch listing details", err);
                setLoading(false);
            }
        };
        fetchListing();
    }, [id]);

    const handleContactMaker = () => {
        // Simulates sending a message for the tutorial demonstration
        alert(`Message sent to ${listing.user?.name || 'the maker'}! They will reply to your registered email.`);
    };

    if (loading) return <div className="text-center mt-20 text-xl font-semibold">Loading craft details...</div>;
    if (!listing) return <div className="text-center mt-20 text-xl text-red-600">Craft not found!</div>;

    return (
        <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                {/* Back Button */}
                <button 
                    onClick={() => navigate(-1)} 
                    className="mb-6 text-blue-600 hover:text-blue-800 font-semibold flex items-center transition-colors"
                >
                    &larr; Back to Marketplace
                </button>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                    {/* Left Side: Image */}
                    <div className="md:w-1/2">
                        <img 
                            src={listing.imageUrl || 'https://via.placeholder.com/600'} 
                            alt={listing.title} 
                            className="w-full h-full object-cover min-h-[400px]"
                        />
                    </div>

                    {/* Right Side: Details & Actions */}
                    <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                        <div className="uppercase tracking-wide text-sm text-blue-600 font-bold mb-2">
                            {listing.category}
                        </div>
                        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                            {listing.title}
                        </h1>
                        <p className="text-3xl font-bold text-green-600 mb-6">
                            ${listing.price}
                        </p>
                        
                        <div className="prose prose-blue text-gray-600 mb-8">
                            <p className="leading-relaxed">{listing.description}</p>
                        </div>

                        {/* The Maker Banner */}
                        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-8 flex items-center">
                            <div className="h-12 w-12 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 font-bold text-xl mr-4">
                                {/* Displays the first letter of the maker's name */}
                                {listing.user?.name ? listing.user.name.charAt(0).toUpperCase() : 'M'}
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Crafted by</p>
                                <p className="font-bold text-gray-900">{listing.user?.name || 'Unknown Maker'}</p>
                            </div>
                        </div>

                        {/* Contact Action */}
                        <button 
                            onClick={handleContactMaker}
                            className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-transform transform hover:-translate-y-1"
                        >
                            Contact Maker
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingDetail;