import { createContext, useState } from "react";

// Tạo Context
export const AuthContext = createContext();

// Provider bọc ứng dụng
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
