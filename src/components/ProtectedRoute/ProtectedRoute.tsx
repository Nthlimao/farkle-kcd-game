import { Navigate } from "react-router";
import { getAuthToken } from "@/app/auth/session.ts";

type ProtectedRouteProps = {
  element: React.ReactElement;
};

export default function ProtectedRoute({ element }: ProtectedRouteProps) {
  if (!getAuthToken()) {
    return <Navigate to="/" replace />;
  }

  return element;
}
