import BasicInfo from "./BasicInfo";
import Languages from "./Languages";
import Image from "./Image";
import Map from "./Map";
import Currencies from "./Currencies";
import Timezones from "./Timezones";
import Weather from "./Weather";
import "./Detail.css";

export default function Detail({ country }) {
  return (
    <div className="whole-page">
      <div className="words-info">
        <BasicInfo country={country} />
        <Currencies country={country} />
        <Languages country={country} />
        <Timezones country={country} />
        <Image country={country} />
        <Weather country={country} />
      </div>
      <div className="flag-container">
        <Map country={country} />
      </div>
    </div>
  );
}
