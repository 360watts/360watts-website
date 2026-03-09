import { Navigate } from "react-router-dom";

export function Solutions() {
  return <Navigate to={{ pathname: "/", hash: "solutions-section" }} replace />;
}
