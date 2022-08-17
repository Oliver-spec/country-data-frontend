export default function Capitals({ country }) {
  let capitals = country.capital;
  if (!country.capital) {
    capitals = [country.name.common];
  }

  return (
    <>
      <p>Capital(s):</p>
      <ul>
        {capitals.map((capital, index) => (
          <li key={index}>{capital}</li>
        ))}
      </ul>
    </>
  );
}
