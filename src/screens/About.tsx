import { Navigate } from "react-router-dom";

export function About() {
  return <Navigate to={{ pathname: "/", hash: "about-section" }} replace />;
}
