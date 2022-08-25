export default function Currencies({ country }) {
  const showCurrencies = () => {
    return (
      <div>
        <div>Currencies:</div>
        {Object.entries(country.currencies).map((currency, index) => {
          return (
            <div key={index}>
              {" "}
              - {currency[1].name} ({currency[1].symbol})
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      {country.currencies ? (
        showCurrencies()
      ) : (
        <div>
          <div>Currencies:</div>
          <div>N/A</div>
        </div>
      )}
    </>
  );
}
