import React, { useState, useEffect } from 'react';
import API from '../api/api';

const RequestAccess = () => {
  const [softwares, setSoftwares] = useState([]);
  const [software, setSoftware] = useState('');
  const [accessType, setAccessType] = useState('');
  const [reason, setReason] = useState('');

  useEffect(() => {
    const fetchSoftwares = async () => {
      const res = await API.get('/software');
      setSoftwares(res.data);
    };
    fetchSoftwares();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/requests', { software, accessType, reason });
      alert('Request submitted');
    } catch {
      alert('Error submitting request');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Request Access</h2>
      <select onChange={(e) => setSoftware(e.target.value)} value={software}>
        <option value="">Select Software</option>
        {softwares.map(s => (
          <option key={s.id} value={s.id}>{s.name}</option>
        ))}
      </select>
      <select onChange={(e) => setAccessType(e.target.value)} value={accessType}>
        <option value="">Select Access Type</option>
        <option value="Read">Read</option>
        <option value="Write">Write</option>
        <option value="Admin">Admin</option>
      </select>
      <textarea value={reason} onChange={(e) => setReason(e.target.value)} placeholder="Reason" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default RequestAccess;
