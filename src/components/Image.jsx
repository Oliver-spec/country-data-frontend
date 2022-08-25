import "./Image.css";

export default function Image({ country }) {
  return (
    <div className="flag">
      <img src={country.flags.png} alt={`flag of ${country.name.common}`} />
    </div>
  );
}
