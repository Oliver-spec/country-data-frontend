export default function Continents({ country }) {
  return (
    <>
      <p>Continent(s):</p>
      <ul>
        {country.continents.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </>
  );
}
