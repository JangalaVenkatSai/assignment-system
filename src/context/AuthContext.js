import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    user: null, // { username, role, token }
  });

  useEffect(() => {
    // Check for existing auth tokens in localStorage
    const storedAuth = JSON.parse(localStorage.getItem('auth'));
    if (storedAuth && storedAuth.isAuthenticated) {
      setAuth(storedAuth);
    }
  }, []);

  const login = (userData) => {
    setAuth({
      isAuthenticated: true,
      user: userData,
    });
    localStorage.setItem('auth', JSON.stringify({
      isAuthenticated: true,
      user: userData,
    }));
  };

  const logout = () => {
    setAuth({
      isAuthenticated: false,
      user: null,
    });
    localStorage.removeItem('auth');
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
