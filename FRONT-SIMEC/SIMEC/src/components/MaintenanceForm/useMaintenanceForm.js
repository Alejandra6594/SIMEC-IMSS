import { useState } from "react";
import { helpHttp } from "../../helpers/helpHttp";

const INITIAL_STATE_FORM = {
  matricula_imss: "",
  unidad: "",
  ip: "",
  usuario: "",
  area: "",
  marca: "",
  serie: "",
  modelo: "",
  sistema_operativo: "",
  observaciones: "",
};
let urlConsults = "http://localhost:5000/consultas";
export const useMaintenanceForm = () => {
  const [consult, setConsult] = useState(INITIAL_STATE_FORM);
  const [error, setError] = useState(null);
  const [consultSuccess, setConsultSuccess] = useState(false);
  let api = helpHttp();
  const handleChange = (event) => {
    setConsult({
      ...consult,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewConsult();
  };

  const addNewConsult = async () => {
    try {
      let options = {
        body: consult,
        headers: { "content-type": "application/json" },
      };
      let res = await api.post(urlConsults, options);
      console.log(res);
      setConsultSuccess(true);
      setTimeout(() => {
        setConsultSuccess(false);
      }, 3000);
      resetForm();
    } catch (err) {
      setError(err);
      setConsultSuccess(true);
      setTimeout(() => {
        setConsultSuccess(false);
      }, 3000);
    }
  };

  const resetForm = () => {
    setConsult(INITIAL_STATE_FORM);
  };

  return { consult, error, consultSuccess, handleChange, handleSubmit };
};
