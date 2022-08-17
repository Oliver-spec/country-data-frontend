import Capitals from "./Capitals";
import Continents from "./Continents";

export default function BasicInfo({ country }) {
  let landlocked = "No";
  if (country.landlocked) {
    landlocked = "Yes";
  }

  return (
    <>
      <h1>{country.name.common}</h1>
      <Capitals country={country} />
      <Continents country={country} />
      <p>Sub-region: {country.subregion}</p>
      <p>
        Area: {country.area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
        km²
      </p>
      <p>
        Population:{" "}
        {country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </p>
      <p>Landlocked: {landlocked}</p>
    </>
  );
}
