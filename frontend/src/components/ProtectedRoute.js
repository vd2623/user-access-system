import React from 'react';
import { Navigate } from 'react-router-dom';
import { getUser } from '../auth';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const user = getUser();

  if (!user) return <Navigate to="/login" />;

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
