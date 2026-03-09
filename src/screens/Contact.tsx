import { Navigate } from "react-router-dom";

export function Contact() {
  return <Navigate to={{ pathname: "/", hash: "contact-section" }} replace />;
}
