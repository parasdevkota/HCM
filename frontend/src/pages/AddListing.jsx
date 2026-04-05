const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    
    try {
        const response = await axios.post('http://localhost:5001/api/listings', formData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log("Success:", response.data);
        alert("Craft added successfully!");
    } catch (err) {
        console.error("Error adding listing:", err.response?.data || err.message);
    }
};