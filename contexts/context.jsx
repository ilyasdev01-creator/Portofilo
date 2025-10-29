import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [mode, setMode] = useState('dark');



  const value = {
    mode,
    setMode,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContext;
export { ShopContextProvider };
