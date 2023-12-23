export const UnitsMenu = (props) => {
  const { handleFilterUnits, unitSelected } = props;
  return (
    <nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-3">
      <h2 className="navbar-brand fw-bold">Unidades: {unitSelected}</h2>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <button
            data-unit="UMF"
            className="btn btn-success m-1"
            onClick={(e) => handleFilterUnits(e)}
          >
            UMF
          </button>
        </li>
        <li className="nav-item">
          <button
            data-unit="HGR"
            className="btn btn-success m-1"
            onClick={(e) => handleFilterUnits(e)}
          >
            HGR
          </button>
        </li>
      </ul>
    </nav>
  );
};
