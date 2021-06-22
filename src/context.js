import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

// const initialState = {
//   district: {
//     yilan: false,
//     lotong: false,
//     suao: false,
//     toucheng: false,
//     jiaosi: false,
//     jhuangwei: false,
//     yuanshan: false,
//     dongshan: false,
//     wujie: false,
//     sanshing: false,
//     datong: false,
//     nanao: false,
//   },
//   catagory: { bnb: false, hotel: false, villa: false },
// };
const AppProvider = ({ children }) => {
  const initialState = {
    district: {
      yilan: false,
      lotong: false,
      suao: false,
      toucheng: false,
      jiaosi: false,
      jhuangwei: false,
      yuanshan: false,
      dongshan: false,
      wujie: false,
      sanshing: false,
      datong: false,
      nanao: false,
    },
    catagory: { bnb: false, hotel: false, villa: false },
  };
  const [options, setOptions] = useState(initialState);

  const handleUniClick = (e, filterProp) => {
    const name = e.target.dataset.name;
    setOptions((prevState) => ({
      [filterProp]: {
        ...prevState[filterProp],
        [name]: !prevState[filterProp][name],
      },
    }));
  };

  return (
    <AppContext.Provider
      value={{ options, handleUniClick, setOptions, initialState }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
