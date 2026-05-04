import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosConfig';

const EditListing = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        category: '',
        imageUrl: '',
        description: ''
    });

    useEffect(() => {
        const fetchListing = async () => {
            try {
                const response = await axiosInstance.get(`/api/listings/${id}`);
                setFormData({
                    title: response.data.title || '',
                    price: response.data.price || '',
                    category: response.data.category || '',
                    imageUrl: response.data.imageUrl || '',
                    description: response.data.description || ''
                });
            } catch (error) {
                console.error("Error fetching listing details", error);
            }
        };
        fetchListing();
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axiosInstance.put(`/api/listings/${id}`, formData);
            alert('Listing updated successfully!');
            navigate('/home'); 
        } catch (error) {
            alert('Failed to update listing.');
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-8">
            <div className="bg-blue-50 p-6 rounded shadow border border-blue-100">
                <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">Edit Your Craft</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col">
                        <label className="font-semibold mb-1">Title:</label>
                        <input type="text" name="title" value={formData.title} onChange={handleChange} className="border p-2 rounded bg-white" required />
                    </div>

                    <div className="flex flex-col">
                        <label className="font-semibold mb-1">Price ($):</label>
                        <input type="number" name="price" value={formData.price} onChange={handleChange} className="border p-2 rounded bg-white" required />
                    </div>

                    <div className="flex flex-col">
                        <label className="font-semibold mb-1">Category:</label>
                        <select name="category" value={formData.category} onChange={handleChange} className="border p-2 rounded bg-white" required>
                            <option value="Textiles">Textiles</option>
                            <option value="Pottery">Pottery</option>
                            <option value="Woodwork">Woodwork</option>
                            <option value="Jewelry">Jewelry</option>
                            <option value="Candles">Candles</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label className="font-semibold mb-1">Description:</label>
                        <textarea name="description" value={formData.description} onChange={handleChange} className="border p-2 rounded bg-white min-h-[100px]" required />
                    </div>

                    <div className="flex flex-col">
                        <label className="font-semibold mb-1">Image URL:</label>
                        <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} className="border p-2 rounded bg-white" />
                    </div>

                    <div className="flex justify-end space-x-4 mt-6">
                        <button type="button" onClick={() => navigate('/home')} className="px-6 py-2 bg-gray-300 rounded text-gray-700">Cancel</button>
                        <button type="submit" className="px-6 py-2 bg-blue-600 rounded text-white font-bold hover:bg-blue-700">Update Item</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditListing;