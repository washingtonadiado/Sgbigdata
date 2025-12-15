import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const usePageLoader = (isInitialLoad: boolean) => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const delay = isInitialLoad && location.pathname === "/" ? 5000 : 500;
    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [location.pathname, isInitialLoad]);

  return loading;
};
