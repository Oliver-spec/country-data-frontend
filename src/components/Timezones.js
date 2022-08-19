export default function Timezones({ country }) {
  return (
    <>
      <h3>Timezones:</h3>
      <ul>
        {country.timezones.map((timezone, index) => {
          // get current time in min
          const time = new Date();
          const timeInMin = time.getHours() * 60 + time.getMinutes();

          // get user utc offset
          const userUTCOffset = -time.getTimezoneOffset();

          // get target country utc offset in min
          const targetUTCOffset =
            Number(timezone.substring(4, 6)) * 60 +
            Number(timezone.substring(7));

          // find the difference of time in min between user and target
          const utcDifference =
            timezone.substring(3, 4) === "+"
              ? userUTCOffset - targetUTCOffset
              : userUTCOffset + targetUTCOffset;

          // find target time
          const targetTime =
            timeInMin - utcDifference < 0
              ? timeInMin - utcDifference + 1440
              : timeInMin - utcDifference > 1440
              ? timeInMin - utcDifference - 1440
              : timeInMin - utcDifference;
          const targetHourString = Math.floor(targetTime / 60).toString();
          const targetMinString =
            (targetTime % 60).toString().length === 2
              ? (targetTime % 60).toString()
              : `0${targetTime % 60}`;

          return (
            <li key={index}>
              {timezone} ={" "}
              {`Local time: ${targetHourString}:${targetMinString}`}
            </li>
          );
        })}
      </ul>
    </>
  );
}
