// src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../store/Auth';

const ProtectedRoute = ({ element }) => {
  const { isLoggedin } = useAuth();

  return isLoggedin ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
