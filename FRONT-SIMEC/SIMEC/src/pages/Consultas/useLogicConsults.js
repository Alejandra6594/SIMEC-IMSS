import { useEffect, useState } from "react";
import { helpHttp } from "../../helpers/helpHttp";
let urlConsult = "http://localhost:5000/consultas";
export const useLogicConsults = () => {
  const [consults, setConsults] = useState([]);
  const [error, setError] = useState(null);

  let api = helpHttp();

  useEffect(() => {
    const getFetchConsults = async () => {
      try {
        let res = await api.get(urlConsult);
        setConsults(res);
      } catch (err) {
        setError(err);
      }
    };

    getFetchConsults();
  }, [urlConsult]);

  return { consults, error };
};
