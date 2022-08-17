import BasicInfo from "./BasicInfo";
import Languages from "./Languages";
import Image from "./Image";
import Map from "./Map";
import Currencies from "./Currencies";
import Timezones from "./Timezones";

export default function Detail({ country }) {
  return (
    <div>
      <BasicInfo country={country} />
      <Currencies country={country} />
      <Languages country={country} />
      <Timezones country={country} />
      <Image country={country} />
      <Map country={country} />
    </div>
  );
}
