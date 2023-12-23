import { UnitsMenu } from "../../components/UnitsMenu/UnitsMenu";
import { Header } from "../../layout/Header/Header";
// import { units } from "../../data/myData";
import { UnitCard } from "../../components/UnitCard/UnitCard";
import { useLogicUnits } from "./useLogicUnits";
export const Unidades = () => {
  const { unitsFiltered, unitSelected, handleFilterUnits } = useLogicUnits();
  return (
    <section className="container h-100">
      <header className="row ">
        <div className="col-xl-12">
          <Header />
        </div>
      </header>
      <section className="row">
        <div className="col-xl-12">
          <UnitsMenu
            handleFilterUnits={handleFilterUnits}
            unitSelected={unitSelected}
          />
        </div>
      </section>
      <section className="container d-none d-md-block ">
        <div
          className="row "
          style={{ minHeight: "50vh", maxHeight: "70vh", overflow: "auto" }}
        >
          {unitsFiltered
            ? unitsFiltered.map((unit) => (
                <div className="col-3 mb-4" key={unit.id}>
                  <UnitCard myUnit={unit} />
                </div>
              ))
            : null}
        </div>
      </section>
    </section>
  );
};
