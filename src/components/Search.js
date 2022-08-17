export default function Search({
  filterCountries,
  searchByCountryCode,
  countries,
  dialCodes,
}) {
  if (countries.length !== 0 && dialCodes.length !== 0) {
    return (
      <>
        <p>Find Countries</p>
        <p>
          <input onChange={filterCountries} />
        </p>
        <p>Find Countries by Country Code</p>
        <p>
          + <input onChange={searchByCountryCode} />
        </p>
      </>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}
