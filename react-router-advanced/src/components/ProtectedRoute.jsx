import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // simulate authentication
  const isAuthenticated = false;

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;