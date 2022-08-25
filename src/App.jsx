import { useState, useEffect } from "react";
import Search from "./components/Search";
import Names from "./components/Names";
// import TooMany from "./components/TooMany";
import Detail from "./components/Detail";
import Footer from "./components/Footer";
// import Weather from "./components/Weather";
// import DialCodeResult from "./components/DialCodeResult";
import api from "./services/api";

export default function App() {
  // states
  const [countries, setCountries] = useState([]);
  const [displayedCountries, setDisplayedCountries] = useState([]);
  const [dialCodes, setDialCodes] = useState([]);
  // const [dialCodeSearchResult, setDialCodeSearchResult] = useState([]);
  // console.log(countries, dialCodes);

  // effects
  useEffect(() => {
    api.getAll().then((response) => {
      setCountries(response);
      // console.log(response);
    });

    api.getDialCodes().then((response) => {
      setDialCodes(response);
      // console.log(response);
    });
  }, []);

  useEffect(() => {
    setDisplayedCountries(countries);
  }, [countries]);

  // event handlers
  function filterCountries(event) {
    const filteredByName = countries.filter((country) =>
      country.name.common
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
    );

    const countryByDialCode = dialCodes.filter(
      (country) => country.dial_code === `+${event.target.value}`
    );
    // console.log(countryByDialCode);

    const countryByDialCodeNameList = countryByDialCode.map((country) =>
      country.name.toLowerCase()
    );
    // console.log(countryByDialCodeNameList);

    const filteredByCode = countries.filter((country) => {
      const countryNameToCheck = country.name.common.toLowerCase();
      return countryByDialCodeNameList.includes(countryNameToCheck);
    });

    const filtered = filteredByName.concat(filteredByCode);
    setDisplayedCountries(filtered);
    window.scrollTo(0, 0);
  }

  // function searchByCountryCode(event) {
  //   const countryByDialCode = dialCodes.filter(
  //     (country) => country.dial_code === `+${event.target.value}`
  //   );
  //   // console.log(countryByDialCode);
  //   setDialCodeSearchResult(countryByDialCode);
  // }

  // if (displayedCountries.length > 10) {
  //   return (
  //     <>
  //       <Search
  //         filterCountries={filterCountries}
  //         // searchByCountryCode={searchByCountryCode}
  //         countries={countries}
  //         dialCodes={dialCodes}
  //       />
  //       {/* <DialCodeResult dialCodeSearchResult={dialCodeSearchResult} /> */}
  //       <TooMany />
  //     </>
  //   );
  // } else
  if (displayedCountries.length === 1) {
    return (
      <>
        <Search
          filterCountries={filterCountries}
          // searchByCountryCode={searchByCountryCode}
          countries={countries}
          dialCodes={dialCodes}
        />
        {/* <DialCodeResult dialCodeSearchResult={dialCodeSearchResult} /> */}
        <Detail country={displayedCountries[0]} />
        {/* <Weather country={displayedCountries[0]} /> */}
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Search
          filterCountries={filterCountries}
          // searchByCountryCode={searchByCountryCode}
          countries={countries}
          dialCodes={dialCodes}
        />
        {/* <DialCodeResult dialCodeSearchResult={dialCodeSearchResult} /> */}
        <Names
          displayedCountries={displayedCountries}
          setDisplayedCountries={setDisplayedCountries}
        />
        <Footer />
      </>
    );
  }
}
