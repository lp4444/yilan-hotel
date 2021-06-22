import React, { useState, useEffect, useContext } from "react";
//import { useGlobalContext, AppContext } from "./context";
import { districts, categories } from "./filterData";
import nanao from "./nanao.jpg";
const Searchform = ({
  options,
  setOptions,
  trueOptions,
  setTrueOptions,
  InitialTrueOptions,
  data,
  pageData,
  setPageData,
  hotels,
  setHotels,
  filteredHotels,
  setFilteredHotels,
  page,
  setPage,
}) => {
  const [mode, setMode] = useState({ districtState: false, classState: true });

  const buttonStyle = {
    // padding: "0rem",
  };

  console.log("mode", mode.districtState);

  // const handleModeClick = (e) => {
  //   const name = e.target.dataset.name;
  //   setMode((prevState) => ({
  //     [name]: !prevState[name],
  //   }));
  // };
  const handleModeClick = () => {
    const modeKeys = Object.keys(mode);
    for (let item of modeKeys) {
      setMode((prevState) => ({
        ...prevState,
        [item]: !prevState[item],
      }));
    }
  };

  const handleUniClick = (e, filterProp) => {
    const name = e.target.dataset.name;

    setOptions((prevState) => ({
      ...prevState,
      [filterProp]: {
        ...prevState[filterProp],
        [name]: !prevState[filterProp][name],
      },
    }));
    console.log("name", name);
    console.log("uniclick", options);
    // setPage(page + 1);
  };

  const handleSearchClick = (e) => {
    console.log("handleSearch", options); //For Console

    setTrueOptions(InitialTrueOptions);
    const { Address, Class } = options;
    for (let AddressKey in Address) {
      if (Address[AddressKey]) {
        setTrueOptions((prevState) => ({
          ...prevState,
          Address: [...prevState.Address, AddressKey],
        }));
      }
    }
    for (let ClassKey in Class) {
      if (Class[ClassKey]) {
        setTrueOptions((prevState) => ({
          ...prevState,
          Class: [...prevState.Class, ClassKey],
        }));
      }
    }

    // console.log("datasearch", data);
    console.log("trueOptions", trueOptions); //For Console
    // const collectedTrueKeys = {
    //   Class: ["國際觀光旅館",],
    //   Address:['宜蘭市']
    // };
    // setHotels(multiPropsFilter(data, trueOptions));
    // console.log("hotelsSearchlength", hotels.length);
    // setPageData(paginate(hotels));
    // console.log("pageDatasearch", pageData);
    // const optionAddressKeys = Object.keys(options.Address);
  };
  return (
    <div className="search-form">
      {/* <img src="https://taiwan.taiwanstay.net.tw/twpic/30111.jpg" alt="nanao" /> */}
      <div className="search-container">
        <div className="btn-container">
          <button
            type="button"
            // className="btn-mode"
            className={`btn-mode ${
              mode.districtState ? "btn-mode-active" : null
            }`}
            data-name="districtState"
            onClick={handleModeClick}
          >
            行政區
          </button>
          <button
            type="button"
            // className="btn-mode"
            className={`btn-mode ${mode.classState ? "btn-mode-active" : null}`}
            data-name="classState"
            onClick={handleModeClick}
          >
            住宿類型
          </button>
        </div>
        {mode.districtState && (
          <div className="btn-container">
            {districts.map((district, index) => {
              const { id, text, name } = district;
              const optionAddressKeys = Object.keys(options.Address);
              return (
                <button
                  type="button"
                  className={`btn ${
                    options.Address[optionAddressKeys[index]]
                      ? "active-btn"
                      : null
                  }`}
                  // className="btn"
                  key={id}
                  data-name={text}
                  onClick={(e) => handleUniClick(e, "Address")}
                >
                  {text}
                </button>
              );
            })}
          </div>
        )}
        {mode.classState && (
          <div className="btn-container">
            {categories.map((category, index) => {
              const { id, text, name } = category;
              const optionClassKeys = Object.keys(options.Class);
              return (
                <button
                  type="button"
                  className={`btn ${
                    options.Class[optionClassKeys[index]] ? "active-btn" : null
                  }`}
                  key={id}
                  data-name={text}
                  onClick={(e) => handleUniClick(e, "Class")}
                >
                  {text}
                </button>
              );
            })}
          </div>
        )}
        <div className="btn-container">
          <button
            className="btn"
            style={buttonStyle}
            onClick={(e) => handleSearchClick(e)}
          >
            搜尋地點
          </button>
        </div>
      </div>
    </div>
  );
};

export default Searchform;
