import { useState } from "react";
import axios from "axios";

export default function useData() {
  const [data, setData] = useState(null);

  const getData = async () => {
    return axios.get("/").then((res) => {
      console.log("res.data.records:", res.data.records);
      setData(res.data.records);
    });
  };
  return {
    getData,
    data,
  };
}
