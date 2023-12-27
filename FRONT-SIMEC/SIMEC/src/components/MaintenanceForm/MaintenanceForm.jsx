import { InputFloating } from "../InputFloating/InputFloating";
import "./MaintenanceForm_style.scss";
import { useMaintenanceForm } from "./useMaintenanceForm";
export const MaintenanceForm = () => {
  const { consult, handleChange, handleSubmit, error, consultSuccess } =
    useMaintenanceForm();
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4 className="mb-2">Favor de llenar los siguientes campos</h4>
      <div className=" my-2 d-flex justify-content-around align-items-center">
        <InputFloating
          type="text"
          id="matriculaInput"
          placeholder="Unidad"
          name="matricula_imss"
          value={consult.matricula_imss}
          handleChange={handleChange}
        >
          Matricula Imss
        </InputFloating>

        <InputFloating
          type="text"
          id="unidadInput"
          placeholder="Unidad"
          name="unidad"
          value={consult.unidad}
          handleChange={handleChange}
        >
          Unidad
        </InputFloating>

        <InputFloating
          type="text"
          id="ipInput"
          placeholder="Ip"
          name="ip"
          value={consult.ip}
          handleChange={handleChange}
        >
          Ip
        </InputFloating>
      </div>

      <div className=" my-2 d-flex justify-content-around align-items-center">
        <InputFloating
          type="text"
          id="usuarioInput"
          placeholder="usuario"
          name="usuario"
          value={consult.usuario}
          handleChange={handleChange}
        >
          Usuario
        </InputFloating>

        <InputFloating
          type="text"
          id="areaInput"
          placeholder="Area"
          name="area"
          value={consult.area}
          handleChange={handleChange}
        >
          Area
        </InputFloating>
        <InputFloating
          type="text"
          id="marcaInput"
          placeholder="Marca"
          name="marca"
          value={consult.marca}
          handleChange={handleChange}
        >
          Marca
        </InputFloating>
      </div>

      <div className=" my-2 d-flex justify-content-around align-items-center">
        <InputFloating
          type="text"
          id="serieInput"
          placeholder="Serie"
          name="serie"
          value={consult.serie}
          handleChange={handleChange}
        >
          Serie
        </InputFloating>
        <InputFloating
          type="text"
          id="modeloInput"
          placeholder="Modelo"
          name="modelo"
          value={consult.modelo}
          handleChange={handleChange}
        >
          Modelo
        </InputFloating>

        <InputFloating
          type="text"
          id="soInput"
          placeholder="SO"
          name="sistema_operativo"
          value={consult.sistema_operativo}
          handleChange={handleChange}
        >
          S.O.
        </InputFloating>
      </div>

      <div className="form-floating">
        <textarea
          style={{ height: "7rem", resize: "none" }}
          className="form-control w-100"
          placeholder="Leave a comment here"
          id="floatingTextarea"
          name="observaciones"
          value={consult.observaciones}
          onChange={handleChange}
        ></textarea>
        <label htmlFor="floatingTextarea">Observaciones</label>
      </div>
      {error && consultSuccess ? (
        <h4 className="text-danger">Error: {error}</h4>
      ) : null}
      {!error && consultSuccess ? (
        <h4 className="text-success mt-1">Mantenimiento agregado con exito</h4>
      ) : null}
      <button type="submit" className="btn btn-primary my-3">
        Enviar
      </button>
    </form>
  );
};
