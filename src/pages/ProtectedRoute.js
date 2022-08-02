import { Navigate } from "react-router-dom";

export default ({ children, user }) => {
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};
