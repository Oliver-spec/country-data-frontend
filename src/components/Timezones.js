export default function Timezones({ country }) {
  return (
    <>
      <h3>Timezones:</h3>
      <ul>
        {country.timezones.map((timezone, index) => (
          <li key={index}>{timezone}</li>
        ))}
      </ul>
    </>
  );
}
