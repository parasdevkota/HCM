import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  
  const [user, setUser] = useState(() => {
  const savedToken = localStorage.getItem('token');
  return savedToken ? { token: savedToken } : null;
  });

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('token', userData.token || userData); //saving the login tokens
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token'); //remove the token after logout only
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
