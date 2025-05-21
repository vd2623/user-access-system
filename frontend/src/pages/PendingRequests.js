import React, { useEffect, useState } from 'react';
import API from '../api/api';

const PendingRequests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    API.get('/requests').then(res => setRequests(res.data));
  }, []);

  const handleAction = async (id, status) => {
    await API.patch(`/requests/${id}`, { status });
    setRequests((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <div>
      <h2>Pending Requests</h2>
      {requests.map((r) => (
        <div key={r.id}>
          <p>{r.user.username} requests {r.accessType} access to {r.software.name}</p>
          <p>Reason: {r.reason}</p>
          <button onClick={() => handleAction(r.id, 'Approved')}>Approve</button>
          <button onClick={() => handleAction(r.id, 'Rejected')}>Reject</button>
        </div>
      ))}
    </div>
  );
};

export default PendingRequests;
