import "styles/404page.css";
import { useEffect } from "react";

export const PageNotFound = () => {
  useEffect(() => {
    document.title = "404 Error | Shopzila";
  }, []);
  return (
    <div className="page-container">
      <h1>404 Error!!!!!!</h1>
      <h1>Page not found</h1>
    </div>
  );
};
