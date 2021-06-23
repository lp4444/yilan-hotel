import { useState, useEffect, useCallback } from "react";
import paginate from "./utils";
const url =
  "https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel/YilanCounty?$format=JSON";
// const url =
//   "https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel/YilanCounty?$filter=length('Picture')%20gt%200&$format=JSON";
export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [pageData, setPageData] = useState([]);
  const getHotels = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
    setPageData(paginate(data));
    setLoading(false);
    console.log("data", data);
  };

  useEffect(() => {
    getHotels();
  }, []);
  return { loading, data, pageData, setPageData };
};
