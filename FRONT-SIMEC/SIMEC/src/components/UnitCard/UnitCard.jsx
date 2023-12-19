import { ItemNavLink } from "../ItemNavLink/ItemNavLink";
import "./UnitCard_style.scss";
export const UnitCard = (props) => {
  const { myUnit } = props;
  const { id, urlImg, nameUnit, description, urlMaps, urlLive, unit } = myUnit;

  return (
    <div className="card-unit text-center">
      <img src={urlImg} className="card-unit__img" alt={nameUnit} />
      <div className="card-body ">
        <h5 className="card-title">{nameUnit}</h5>
        <p className="card-text">{description}</p>
        <footer className="card-links d-flex ">
          <button className="btn btn-success">
            <ItemNavLink to={urlMaps} target="_blank">
              Ver en google maps
            </ItemNavLink>
          </button>
        </footer>
      </div>
    </div>
  );
};
