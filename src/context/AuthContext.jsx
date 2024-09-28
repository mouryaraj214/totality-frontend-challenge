import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 

  const login = (username, password) => {
   
    if (username && password) {
      setUser({ username });
    } else {
      alert('Invalid credentials');
    }
  };

  
  const register = (username, password) => {
    
    if (username && password) {
      setUser({ username });
    } else {
      alert('Invalid registration details');
    }
  };


  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
