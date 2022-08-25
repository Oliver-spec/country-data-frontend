import "./Search.css";

export default function Search({
  filterCountries,
  // searchByCountryCode,
  countries,
  dialCodes,
}) {
  if (countries.length !== 0 && dialCodes.length !== 0) {
    return (
      <div className="search-box">
        <div className="find-countries-search">
          <div>Find countries</div>
          <input
            type="text"
            onChange={filterCountries}
            placeholder="Country name or code"
          />
        </div>
      </div>
    );
  } else {
    return <div className="loader" />;
  }
}
