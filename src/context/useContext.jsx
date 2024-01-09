import { createContext, useContext } from "react";

export const AppContext = createContext();

//funcion corta para exportar el context
export const useAuth = () => {
  const context = useContext(AppContext);
  return context;
};

export const AppProvider = ({ children }) => {


  return (
    <AppContext.Provider
      value={{
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
