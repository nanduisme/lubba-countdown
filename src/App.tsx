import React from "react";

const App = () => {
  const setDate = new Date("9/9/2020");
  const today = new Date();
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
      {`${asString(years, "Year")} ${asString(months, "Month")} ${asString(days, "Day")}`}
    </div>
  );
};

export default App;
