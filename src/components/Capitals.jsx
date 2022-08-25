import "./Capitals.css";

export default function Capitals({ country }) {
  let capitals = country.capital;
  if (!country.capital) {
    capitals = [country.name.common];
  }

  return (
    <>
      <div>Capital(s):</div>
      {capitals.map((capital, index) => (
        <div className="capital-name" key={index}>
          {" "}
          - {capital}
        </div>
      ))}
    </>
  );
}
