import React, { useState } from 'react';
import axios from '../services/api';

const CreatePR = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/pull-requests', {
        title,
        description,
      });
      setMessage(`Pull Request Created: ${response.data.pullRequestId}`);
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error(error);
      setMessage('Error creating pull request.');
    }
  };

  return (
    <div>
      <h1>Create Pull Request</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreatePR;
