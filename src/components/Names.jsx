import Capitals from "./Capitals";
import "./Names.css";

export default function Names({ displayedCountries, setDisplayedCountries }) {
  return (
    <div className="whole-names">
      {displayedCountries.map((country) => (
        <div className="country-info" key={country.name.common}>
          <div className="county-name">
            {country.name.common} {country.flag}
          </div>
          <div>Continents: {country.continents}</div>
          <Capitals country={country} />
          <div>
            Population:{" "}
            {country.population
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </div>
          <button
            className="more-button"
            onClick={() => {
              setDisplayedCountries([country]);
              window.scrollTo(0, 0);
            }}
          >
            More
          </button>
        </div>
      ))}
    </div>
  );
}
