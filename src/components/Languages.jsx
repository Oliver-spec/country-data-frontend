export default function Languages({ country }) {
  const showLanguages = () => {
    return (
      <div>
        <div>Languages:</div>
        {Object.entries(country.languages).map((language) => (
          <div key={language[1]}> - {language[1]}</div>
        ))}
      </div>
    );
  };

  return (
    <>
      {country.languages ? (
        showLanguages()
      ) : (
        <div>
          <div>Languages:</div>
          <div>N/A</div>
        </div>
      )}
    </>
  );
}
