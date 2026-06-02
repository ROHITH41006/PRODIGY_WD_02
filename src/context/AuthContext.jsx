import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved =
      localStorage.getItem("user");

    return saved
      ? JSON.parse(saved)
      : null;
  });

  const login = (
    email,
    password
  ) => {
    if (
      email ===
        "admin@gmail.com" &&
      password === "admin123"
    ) {
      const admin = {
        email,
      };

      setUser(admin);

      localStorage.setItem(
        "user",
        JSON.stringify(admin)
      );

      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(null);

    localStorage.removeItem(
      "user"
    );
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}