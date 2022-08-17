import Capitals from "./Capitals";

export default function Names({ displayedCountries, setDisplayedCountries }) {
  return (
    <>
      {displayedCountries.map((country) => (
        <div key={country.name.common}>
          <h3>
            {country.name.common} {country.flag}
          </h3>
          <p>Continents: {country.continents}</p>
          <Capitals country={country} />
          <p>
            Population:{" "}
            {country.population
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </p>
          <button onClick={() => setDisplayedCountries([country])}>More</button>
        </div>
      ))}
    </>
  );
}
