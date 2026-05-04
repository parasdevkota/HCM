import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosConfig'; // Ensure this points to your configured instance

const AddListing = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        category: '',
        imageUrl: '',
        description: '' // Added missing description field
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Sends data to the protected POST route
            const response = await axiosInstance.post('/api/listings', formData);
            alert('New Listing added Successfully!');
            navigate('/home'); // Redirects back to the marketplace to see the new item

        } catch (error) {
            console.error('There is an error adding the listing:', error);
            alert('Failed to add Listing. Are you logged in?');
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-8 grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-8 md:col-start-3 bg-blue-50 p-6 rounded shadow border border-blue-100">
                <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">Add Items to the Marketplace</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-12 gap-4 items-center">
                        <label className="col-span-4 text-right font-semibold">Listing Title:</label>
                        <input 
                            type="text" 
                            name="title" 
                            value={formData.title}
                            onChange={handleChange} 
                            className="col-span-8 border p-2 rounded bg-white" 
                            placeholder="e.g. Handmade Ceramic Vase" 
                            required 
                        />
                    </div>

                    <div className="grid grid-cols-12 gap-4 items-center">
                        <label className="col-span-4 text-right font-semibold">Price ($):</label>
                        <input 
                            type="number" 
                            name="price" 
                            value={formData.price}
                            onChange={handleChange} 
                            className="col-span-8 border p-2 rounded bg-white" 
                            placeholder="45" 
                            required 
                        />
                    </div>

                    <div className="grid grid-cols-12 gap-4 items-center">
                        <label className="col-span-4 text-right font-semibold">Category:</label>
                        <select 
                            name="category" 
                            value={formData.category}
                            onChange={handleChange} 
                            className="col-span-8 border p-2 rounded bg-white"
                            required
                        >
                            <option value="">Select Category</option>
                            <option value="Textiles">Textiles</option>
                            <option value="Pottery">Pottery</option>
                            <option value="Woodwork">Woodwork</option>
                            <option value="Jewelry">Jewelry</option>
                            <option value="Candles">Candles</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-12 gap-4 items-start">
                        <label className="col-span-4 text-right font-semibold mt-2">Description:</label>
                        <textarea 
                            name="description" 
                            value={formData.description}
                            onChange={handleChange} 
                            className="col-span-8 border p-2 rounded bg-white min-h-[100px]" 
                            placeholder="Describe your craft, materials used, etc." 
                            required 
                        />
                    </div>

                    <div className="grid grid-cols-12 gap-4 items-center">
                        <label className="col-span-4 text-right font-semibold">Upload Image URL:</label>
                        <input 
                            type="text" 
                            name="imageUrl" 
                            value={formData.imageUrl}
                            onChange={handleChange} 
                            className="col-span-8 border p-2 rounded bg-white" 
                            placeholder="https://example.com/image.jpg" 
                        />
                    </div>

                    <div className="flex justify-end space-x-4 mt-6">
                        <button type="button" onClick={() => navigate('/home')} className="px-6 py-2 bg-gray-300 rounded text-gray-700 hover:bg-gray-400 transition-colors">Cancel</button>
                        <button type="submit" className="px-6 py-2 bg-blue-600 rounded text-white font-bold hover:bg-blue-700 transition-colors">Add Item</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddListing;