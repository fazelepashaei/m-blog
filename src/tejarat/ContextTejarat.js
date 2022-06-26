import React, { useContext, useState } from "react";
import { createContext } from "react";
export const ProductcontexTejarat = createContext();
const ContextTejarat = ({ children }) => {
  const [ valuenum, setValue] = useState(0);
  return (
    <ProductcontexTejarat.Provider
      value={{
        valuenum,
        setValue,
    
      }}
    >
      {children}
    </ProductcontexTejarat.Provider>
  );
};
export default ContextTejarat;
