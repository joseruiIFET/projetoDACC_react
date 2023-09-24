import React from 'react';

import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function PrivateRoute({ children }) {
  const { currentUser, loading } = useAuth();

  if (loading) return null;

  return currentUser ? children : <Navigate to="/login" replace/>;
}

export default PrivateRoute;
