import React, { useState } from 'react';
import API from '../api/api';

const CreateSoftware = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [accessLevels, setAccessLevels] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/software', { name, description, accessLevels: accessLevels.split(',') });
      alert('Software created');
    } catch {
      alert('Error creating software');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Software</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <input value={accessLevels} onChange={(e) => setAccessLevels(e.target.value)} placeholder="Access Levels (comma-separated)" />
      <button type="submit">Create</button>
    </form>
  );
};

export default CreateSoftware;
