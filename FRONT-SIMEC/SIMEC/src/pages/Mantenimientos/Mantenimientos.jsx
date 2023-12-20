import { MaintenanceForm } from "../../components/MaintenanceForm/MaintenanceForm";
import { Header } from "../../layout/Header/Header";

export const Mantenimientos = () => {
  return (
    <section className="container h-100 ">
      <header className="row ">
        <div className="col-xl-12">
          <Header />
        </div>
      </header>
      {/* <section className="row">
        <div className="col-xl-12">
          <h2 className="fw-bold mt-3">Mantenimientos</h2>
        </div>
      </section> */}
      <section className="row d-flex justify-content-center mt-4">
        <div className="col-xl-8 ">
          <MaintenanceForm />
        </div>
      </section>
    </section>
  );
};
