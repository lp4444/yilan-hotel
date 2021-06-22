import React, { useState, useContext, useEffect } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
//import "./App.css";
import { useFetch } from "./useFetch";
import Navbar from "./Navbar";
import Searchform from "./Searchform";
import HotelList from "./HotelList";
import multiPropsFilter from "./multiPropsFilter";
import paginate from "./utils";
import Buttons from "./Buttons";
import About from "./About";
function App() {
  // const initialState = {
  //   Address: {
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
  //   Class: { bnb: false, hotel: false, villa: false },
  // };
  const initialState = {
    Address: {
      宜蘭市: false,
      羅東鎮: false,
      蘇澳鎮: false,
      頭城鎮: false,
      礁溪鄉: false,
      壯圍鄉: false,
      員山鄉: false,
      冬山鄉: false,
      五結鄉: false,
      三星鄉: false,
      大同鄉: false,
      南澳鄉: false,
    },
    Class: { 民宿: false, 一般旅館: false, 國際觀光旅館: false },
  };
  const [options, setOptions] = useState(initialState);

  const InitialTrueOptions = {
    Address: [],
    Class: [],
  };
  const [trueOptions, setTrueOptions] = useState(InitialTrueOptions);

  const { loading, data, setData, pageData, setPageData } = useFetch();
  const [page, setPage] = useState(0);

  const [hotels, setHotels] = useState([]);

  const [filteredHotels, setFilteredHotels] = useState([]);

  useEffect(() => {
    setHotels(multiPropsFilter(data, trueOptions));
  }, [trueOptions]);

  useEffect(() => {
    setPageData(paginate(hotels));
    setPage(0);
    console.log("ApphotelsLength", hotels.length);
  }, [hotels]);

  useEffect(() => {
    if (loading) return;
    setFilteredHotels(pageData[page]);
  }, [loading, page, pageData]);

  console.log("hotelslength", hotels.length);
  return (
    // <HashRouter basename={process.env.PUBLIC_URL}>
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Searchform
            options={options}
            setOptions={setOptions}
            InitialTrueOptions={InitialTrueOptions}
            trueOptions={trueOptions}
            setTrueOptions={setTrueOptions}
          />
          <HotelList filteredHotels={filteredHotels} hotels={hotels} />
          <Buttons
            loading={loading}
            pageData={pageData}
            setPage={setPage}
            page={page}
          />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
    // </HashRouter>
  );
}

export default App;
