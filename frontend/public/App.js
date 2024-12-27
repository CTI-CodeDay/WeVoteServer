import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:8000/api/greet/', { name });
    setMessage(response.data.message);
  };

  return (
    <div>
      <div>
        <img src={`${process.env.PUBLIC_URL}/static/images/tiger.jpg`} alt="Description" />
      </div>
      {message && <h2>{message}</h2>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <button type="submit">Greet</button>
      </form>
    </div>
  );
}

export default App;