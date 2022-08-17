export default function Currencies({ country }) {
  if (country.currencies) {
    return (
      <>
        <h3>Currencies:</h3>
        <ul>
          {Object.entries(country.currencies).map((currency, index) => {
            return (
              <li key={index}>
                {currency[1].name} ({currency[1].symbol})
              </li>
            );
          })}
        </ul>
      </>
    );
  } else {
    <>
      <h3>Currencies:</h3>
      <p>No currency</p>
    </>;
  }
}
