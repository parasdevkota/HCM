import React, { useState } from 'react';
import axios from '../axiosConfig'; //using the preconfigured axios in the sample app

const AddListing = () => {
    const [formData, setFormData] = useState ({
        title: '',
        price:'',
        category:'',
        imageUrl:''
    });

    const handleChange = (e) => {
        setFormData ({ ...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault ();
        try {
            const response = await axios.post('/api/lisitings', formData);
            alert('New Listing added Succesfully!');

        } catch (error){
            console.error ('There is an error adding the listing:', error);
            alert('Failed to add Listing.');
            }
        };

        return (
            <div className ="max-w-4xl mx-auto p-8 grid grid-cols-12 gap-4">
                <div className ="col-span-12 md:col-span-8 md:col-start-3 bg-red-50 p-6 rounded shadow">
                    <h2 className="text-2xl font-bold mb-6 text-center">Add Items to the Marketplace</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-12 gap-4 items-center">
                            <label className="col-span-4 text-right font-semibold">Listing Title:</label>
                            <input 
                            type="text" 
                            name="title" 
                            onChange={handleChange} 
                            className="col-span-8 border p-2 rounded bg-gray-200" 
                            placeholder="e.g. Handmade Ceramic Vase" 
                            required 
                            />
                        </div>

                        <div className="grid grid-cols-12 gap-4 items-center">
                            <label className="col-span-4 text-right font-semibold">Price ($):</label>
                            <input 
                            type="number" 
                            name="price" 
                            onChange={handleChange} 
                            className="col-span-8 border p-2 rounded bg-gray-200" 
                            placeholder="45" 
                            required 
                            />
                        </div>

                        <div className="grid grid-cols-12 gap-4 items-center">
                            <label className="col-span-4 text-right font-semibold">Category:</label>
                            <select name="category" onChange={handleChange} className="col-span-8 border p-2 rounded bg-gray-200">
                            <option value="">Select Category</option>
                            <option value="Textiles">Textiles</option>
                            <option value="Pottery">Pottery</option>
                            <option value="Woodwork">Woodwork</option>
                            </select>
                        </div>

                        <div className="grid grid-cols-12 gap-4 items-center">
                            <label className="col-span-4 text-right font-semibold">Upload Image URL:</label>
                            <input 
                            type="text" 
                            name="imageUrl" 
                            onChange={handleChange} 
                            className="col-span-8 border p-2 rounded bg-gray-200" 
                            placeholder="#" 
                            />
                        </div>

                        <div className="flex justify-end space-x-4 mt-6">
                            <button type="button" className="px-6 py-2 bg-gray-300 rounded text-gray-700">Cancel</button>
                            <button type="submit" className="px-6 py-2 bg-blue-500 rounded text-white font-bold hover:bg-blue-600">Add Item</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    };

export default AddListing;