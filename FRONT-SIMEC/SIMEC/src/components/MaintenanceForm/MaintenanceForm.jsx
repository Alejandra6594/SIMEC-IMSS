import { InputFloating } from "../InputFloating/InputFloating";
import "./MaintenanceForm_style.scss";
export const MaintenanceForm = () => {
  return (
    <form className="form">
      <h4 className="mb-2">Favor de llenar los siguientes campos</h4>
      <div className=" my-2 d-flex justify-content-around align-items-center">
        <InputFloating type="text" id="matriculaInput" placeholder="Unidad">
          Matricula Imss
        </InputFloating>

        <InputFloating type="text" id="unidadInput" placeholder="Unidad">
          Unidad
        </InputFloating>

        <InputFloating type="text" id="ipInput" placeholder="Ip">
          Ip
        </InputFloating>
      </div>

      <div className=" my-2 d-flex justify-content-around align-items-center">
        <InputFloating type="text" id="usuarioInput" placeholder="usuario">
          Usuario
        </InputFloating>

        <InputFloating type="text" id="areaInput" placeholder="Area">
          Area
        </InputFloating>
        <InputFloating type="text" id="marcaInput" placeholder="Marca">
          Marca
        </InputFloating>
      </div>

      <div className=" my-2 d-flex justify-content-around align-items-center">
        <InputFloating type="text" id="serieInput" placeholder="Serie">
          Serie
        </InputFloating>
        <InputFloating type="text" id="modeloInput" placeholder="Modelo">
          Modelo
        </InputFloating>

        <InputFloating type="text" id="soInput" placeholder="SO">
          S.O.
        </InputFloating>
      </div>

      <div className="form-floating">
        <textarea
          style={{ height: "7rem", resize: "none" }}
          className="form-control w-100"
          placeholder="Leave a comment here"
          id="floatingTextarea"
        ></textarea>
        <label htmlFor="floatingTextarea">Observaciones</label>
      </div>

      <button type="submit" className="btn btn-primary my-3">
        Enviar
      </button>
    </form>
  );
};
