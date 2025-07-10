import { Navigate } from 'react-router-dom';
import { getUserRole } from '../utils/auth';

export default function PrivateRoute({ children, role }) {
  const userRole = getUserRole();

  if (!userRole || (role && userRole !== role)) {
    return <Navigate to="/login" />;
  }

  return children;
}
