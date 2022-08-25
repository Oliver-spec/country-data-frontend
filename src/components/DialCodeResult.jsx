export default function DialCodeResult({ dialCodeSearchResult }) {
  return (
    <>
      {dialCodeSearchResult.map((country) => (
        <p key={country.name}>{country.name}</p>
      ))}
    </>
  );
}
