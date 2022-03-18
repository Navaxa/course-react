import { useCallback, useEffect, useState } from "react"

export const useIsAdmin = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  const fetchProfile = useCallback(() => {
    // Aqui se llama api 
    setIsAdmin(true);
  }, []);
  
  useEffect(() => {
    fetchProfile();
  }, [setIsAdmin]);

  return isAdmin;
}