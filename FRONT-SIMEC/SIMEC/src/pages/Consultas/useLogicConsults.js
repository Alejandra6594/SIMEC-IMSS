import { useEffect, useState } from "react";
import { helpHttp } from "../../helpers/helpHttp";
let urlConsults = "http://localhost:5000/consultas";
let urlDeleteConsult = "http://localhost:5000/consulta";
export const useLogicConsults = () => {
  const [consults, setConsults] = useState([]);
  const [error, setError] = useState(null);

  let api = helpHttp();

  useEffect(() => {
    const getFetchConsults = async () => {
      try {
        let res = await api.get(urlConsults);
        setConsults(res);
      } catch (err) {
        setError(err);
      }
    };

    getFetchConsults();
  }, [urlConsults]);

  const deleteConsult = async (idConsult, matricula) => {
    let confirm = window.confirm(
      `¿Estas seguro que deseas eliminar la consulta con matricula ${matricula}?`
    );
    if (confirm) {
      try {
        let endPoint = `${urlDeleteConsult}/${idConsult}`;
        console.log(endPoint);
        let options = {
          headers: { "content-type": "application/json" },
        };

        let res = await api.del(endPoint, options);
        let idDeleteConsultSuccesfully = res.consultDeleting.id;

        let newData = consults.filter(
          (el) => el.id !== idDeleteConsultSuccesfully
        );
        setConsults(newData);
      } catch (err) {
        setError(err);
      }
    } else {
      return;
    }
  };

  return { consults, error, deleteConsult };
};
