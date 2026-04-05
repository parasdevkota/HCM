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
        <div style={{ padding: '20px' }}>
            <h1>Handmade Craft Marketplace</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                {listings.map(item => (
                    <div key={item._id} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <strong>${item.price}</strong>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;