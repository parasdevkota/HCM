import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        const fetchListings = async () => {
            const res = await axios.get('http://localhost:5001/api/listings');
            setListings(res.data);
        };
        fetchListings();
    }, []);

    return (
        <div style={{ padding: '40px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '30px', fontWeight: 'bold' }}>Discover Handmade Crafts</h2>
            
            {/* The Responsive Grid */}
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
                gap: '25px', 
                maxWidth: '1200px', 
                margin: '0 auto' 
            }}>
                {listings.map(item => (
                    <div key={item._id} style={{ 
                        backgroundColor: '#fff', 
                        borderRadius: '12px', 
                        overflow: 'hidden', 
                        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                        transition: 'transform 0.2s'
                    }}>
                        {/* Product Image */}
                        <img 
                            src={item.imageUrl || 'https://via.placeholder.com/300'} 
                            alt={item.title} 
                            style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
                        />
                        
                        {/* Product Details */}
                        <div style={{ padding: '15px' }}>
                            <span style={{ fontSize: '12px', color: '#666', textTransform: 'uppercase' }}>{item.category}</span>
                            <h3 style={{ margin: '5px 0', fontSize: '18px' }}>{item.title}</h3>
                            <p style={{ color: '#777', fontSize: '14px', height: '40px', overflow: 'hidden' }}>{item.description}</p>
                            <div style={{ marginTop: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <strong style={{ fontSize: '20px', color: '#28a745' }}>${item.price}</strong>
                                <button style={{ padding: '8px 15px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}>View Details</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

};

export default Home;