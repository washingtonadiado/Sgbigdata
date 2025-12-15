import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const usePageLoader = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust this value to your liking

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return loading;
};
