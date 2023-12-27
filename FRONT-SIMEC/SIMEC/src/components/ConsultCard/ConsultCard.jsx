export const ConsultCard = (props) => {
  const { consult } = props;
  const {
    id,
    fecha_registro,
    matricula_imss,
    unidad,
    ip,
    usuario,
    area,
    marca,
    serie,
    modelo,
    sistema_operativo,
    observaciones,
  } = consult;

  return (
    <div
      className="card text-center"
      style={{ minHeight: "15rem", overflow: "hidden" }}
    >
      <header
        className="card-header d-flex justify-content-around align-items-center "
        style={{ backgroundColor: "#007d0038" }}
      >
        <p className="m-0">Matricula: {matricula_imss}</p>
        <p className="m-0">Unidad: {unidad.toUpperCase()}</p>
      </header>
      <div className="card-body">
        <h4 className="card-title">
          Usuario: {usuario} - {area.toUpperCase()}
        </h4>
        {/* ACORDION */}
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={"#id-" + id}
                aria-expanded="false"
                aria-controls={id}
              >
                Datos del equipo
              </button>
            </h2>
            <div
              id={"id-" + id}
              className="accordion-collapse collapse "
              style={{ maxHeight: "12rem", overflow: "auto" }}
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p
                  className="card-text mb-1 text-success "
                  style={{ fontSize: "1.1rem" }}
                >
                  IP: <span className="text-black">{ip}</span>
                </p>
                <p
                  className="card-text mb-1 text-success "
                  style={{ fontSize: "1.1rem" }}
                >
                  Marca:{" "}
                  <span className="text-black">{marca.toUpperCase()}</span>
                </p>
                <p
                  className="card-text mb-1 text-success "
                  style={{ fontSize: "1.1rem" }}
                >
                  Serie:{" "}
                  <span className="text-black">{serie.toUpperCase()}</span>
                </p>
                <p
                  className="card-text mb-1 text-success "
                  style={{ fontSize: "1.1rem" }}
                >
                  Modelo:{" "}
                  <span className="text-black">{modelo.toUpperCase()}</span>
                </p>
                <p
                  className="card-text mb-1 text-success "
                  style={{ fontSize: "1.1rem" }}
                >
                  Sistema operativo:{" "}
                  <span className="text-black">
                    {sistema_operativo.toUpperCase()}
                  </span>
                </p>
                {observaciones ? (
                  <p
                    className="card-text mb-1 text-success "
                    style={{ fontSize: "1.1rem" }}
                  >
                    Observaciones:{" "}
                    <span className="text-black">{observaciones}</span>
                  </p>
                ) : (
                  <p className="card-text text-info-emphasis">
                    Sin observaciones
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* AQUI TERMINA EL ACORDION */}

        <footer className="mt-3">
          <button className="btn btn-danger">Eliminar</button>
        </footer>
      </div>
      <div className="card-footer text-body-secondary">
        Fecha de registro: {fecha_registro}
      </div>
    </div>
  );
};
