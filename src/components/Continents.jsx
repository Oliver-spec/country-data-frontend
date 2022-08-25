export default function Continents({ country }) {
  return (
    <>
      <div>Continent(s):</div>
      {country.continents.map((element, index) => (
        <div key={index}> - {element}</div>
      ))}
    </>
  );
}
