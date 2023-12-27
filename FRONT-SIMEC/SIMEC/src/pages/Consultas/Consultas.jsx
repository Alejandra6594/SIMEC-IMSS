import { ConsultCard } from "../../components/ConsultCard/ConsultCard";
import { Header } from "../../layout/Header/Header";
import { useLogicConsults } from "./useLogicConsults";

export const Consultas = () => {
  let { consults, deleteConsult } = useLogicConsults();

  return (
    <section className="container h-100">
      <header className="row ">
        <div className="col-xl-12">
          <Header />
        </div>
      </header>
      <section className="row">
        <div className="col-xl-12">
          <h2 className="fw-bold mt-3">
            Consultas de mantenimientos realizados
          </h2>
        </div>
      </section>
      <section className="container d-none d-md-block ">
        <div
          className="row d-flex"
          style={{ minHeight: "50vh", maxHeight: "70vh", overflow: "auto" }}
        >
          {consults.length > 0 ? (
            consults.map((consult) => (
              <div className="col-3 mb-4" key={consult.id}>
                <ConsultCard consult={consult} deleteConsult={deleteConsult} />
              </div>
            ))
          ) : (
            <h4 className="text-danger">
              No se encuentran las consultas, verificar el servidor
            </h4>
          )}
        </div>
      </section>
    </section>
  );
};
