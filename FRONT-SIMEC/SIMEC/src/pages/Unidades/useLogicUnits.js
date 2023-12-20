import { useEffect, useState } from "react";
import { helpHttp } from "../../helpers/helpHttp";
let urlUnits = "http://localhost:5000/unidades";
export const useLogicUnits = () => {
  const [units, setUnits] = useState([]);

  const [error, setError] = useState(null);
  let api = helpHttp();

  useEffect(() => {
    const getData = async () => {
      try {
        let jsonUnits = await api.get(urlUnits);
        setUnits(jsonUnits);
      } catch (err) {
        setError(err);
      }
    };
    getData();
  }, [urlUnits]);

  return { units, error };
};
