import React, { useEffect, useState } from "react";

const App = () => {
  const [today, setToday] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setToday(new Date()), 1000);
    return () => clearInterval(interval);
  });

  const setDate = new Date("9/9/2020");
  const diff = Math.abs(setDate.getTime() - today.getTime());
  let years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  let months = 12 - Math.abs(today.getMonth() - setDate.getMonth());

  const asString = (arg: number, name: string) => {
    return arg ? `${arg} ${name}${arg > 1 ? "s" : ""}` : "";
  };

  const monthDays = [
    31,
    today.getFullYear() % 4 ? 28 : 29,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  let days = today.getDate() - setDate.getDate();
  if (days < 0) {
    months--;
    if (months < 0) {
      years--;
      months = 0;
    }

    days += monthDays[today.getMonth()];
  }

  return (
    <div>
      {`${asString(years, "Year")} 
      ${asString(months, "Month")} 
      ${asString(days, "Day")}
      ${asString(today.getHours(), "Hour")}
      ${asString(today.getMinutes(), "Minute")} 
      ${asString(today.getSeconds(), "Second")}`}
    </div>
  );
};

export default App;
