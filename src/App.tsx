import React, { useEffect, useState } from "react";

const App = () => {
  const [today, setToday] = useState(new Date());
  const [mode, setMode] = useState("y");

  useEffect(() => {
    const interval = setInterval(() => setToday(new Date()), 1000);
    return () => clearInterval(interval);
  });

  const handleClick = (name: string) => {
    switch (name) {
      case "Year":
        setMode("y");
        break;
      case "Month":
        if (mode === "m") setMode("y");
        else setMode("m");
        break;
      case "Day":
        if (mode === "d") setMode("y");
        else setMode("d");
        break;
      case "Hour":
        if (mode === "h") setMode("y");
        else setMode("h");
        break;
      case "Minute":
        if (mode === "min") setMode("y");
        else setMode("min");
        break;
      case "Second":
        if (mode === "sec") setMode("y");
        else setMode("sec");
        break;
      default:
        break;
    }
  };

  const asString = (arg: number, name: string) => {
    return arg ? (
      <>
        {`${arg}`}
        <span className="lbl" onClick={() => handleClick(name)}>
          {" "}
          {name}
          {arg > 1 ? "s " : " "}
        </span>
      </>
    ) : (
      <></>
    );
  };

  const setDate = new Date("9/9/2020");
  const diff = Math.abs(setDate.getTime() - today.getTime());

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

  if (mode === "y") {
    let years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    let months = 12 - Math.abs(today.getMonth() - setDate.getMonth());
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
        {asString(years, "Year")}
        {asString(months, "Month")}
        {asString(days, "Day")}
        {asString(today.getHours(), "Hour")}
        {asString(today.getMinutes(), "Minute")}
        {asString(today.getSeconds(), "Second")}
      </div>
    );
  } else if (mode === "m") {
    let months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    let days = today.getDate() - setDate.getDate();
    if (days < 0) {
      months--;
      if (months < 0) {
        months = 0;
      }
    }

    return (
      <div>
        {asString(months, "Month")}
        {asString(days, "Day")}
        {asString(today.getHours(), "Hour")}
        {asString(today.getMinutes(), "Minute")}
        {asString(today.getSeconds(), "Second")}
      </div>
    );
  } else if (mode === "d") {
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = today.getHours() - setDate.getHours();
    let minutes = today.getMinutes() - setDate.getMinutes();
    let seconds = today.getSeconds() - setDate.getSeconds();
    if (seconds < 0) {
      minutes--;
      seconds += 60;
      if (minutes < 0) {
        hours--;
        minutes += 60;
        if (hours < 0) {
          days--;
          hours += 24;
          if (days < 0) {
            days += monthDays[today.getMonth()];
          }
        }
      }
    }

    return (
      <div>
        {asString(days, "Day")}
        {asString(hours, "Hour")}
        {asString(minutes, "Minute")}
        {asString(seconds, "Second")}
      </div>
    );
  } else if (mode === "h") {
    let hours = Math.floor(diff / (1000 * 60 * 60));
    let minutes = today.getMinutes() - setDate.getMinutes();
    let seconds = today.getSeconds() - setDate.getSeconds();
    if (seconds < 0) {
      minutes--;
      seconds += 60;
      if (minutes < 0) {
        hours--;
        minutes += 60;
        if (hours < 0) {
          hours += 24;
        }
      }
    }

    return (
      <div>
        {asString(hours, "Hour")}
        {asString(minutes, "Minute")}
        {asString(seconds, "Second")}
      </div>
    );
  } else if (mode === "min") {
    let minutes = Math.floor(diff / (1000 * 60));
    let seconds = today.getSeconds() - setDate.getSeconds();
    if (seconds < 0) {
      minutes--;
      seconds += 60;
      if (minutes < 0) {
        minutes += 60;
      }
    }

    return (
      <div>
        {asString(minutes, "Minute")}
        {asString(seconds, "Second")}
      </div>
    );
  } else if (mode === "sec") {
    let seconds = Math.floor(diff / 1000);
    if (seconds < 0) {
      seconds += 60;
    }

    return <div>{asString(seconds, "Second")}</div>;
  } else {
    return <> Mode error </>;
  }
};

export default App;
