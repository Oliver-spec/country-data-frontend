import Capitals from "./Capitals";
import Continents from "./Continents";
import "./BasicInfo.css";

export default function BasicInfo({ country }) {
  let landlocked = "No";
  if (country.landlocked) {
    landlocked = "Yes";
  }

  return (
    <div>
      <div className="country-name">{country.name.common}</div>
      <Capitals country={country} />
      <Continents country={country} />
      <div>Sub-region: {country.subregion}</div>
      <div>
        Area: {country.area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
        km²
      </div>
      <div>
        Population:{" "}
        {country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </div>
      <div>Landlocked: {landlocked}</div>
    </div>
  );
}
