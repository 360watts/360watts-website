import { Navigate } from "react-router-dom";

export function FAQ() {
  return <Navigate to={{ pathname: "/", hash: "faq-section" }} replace />;
}
