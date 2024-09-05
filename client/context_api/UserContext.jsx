import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Create a context
const UserContext = createContext();

// Custom hook to use the context
export const useUser = () => useContext(UserContext);

// Provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data when the component mounts
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:1111/api/user"); // Adjust the API route as needed
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  // Return the provider with the user data
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
