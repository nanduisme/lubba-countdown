import React from "react";

const App = () => {
  const setDate = new Date("9/9/2020");
  const today = new Date();
  const diff = Math.abs(setDate.getTime() - today.getTime());
  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  const months = 12 - Math.abs(today.getMonth() - setDate.getMonth());
  const days = today.getDate()

  const addS = (arg: number) => {
    return arg > 1 ? "s" : "";
  }

  return (
    <div>{`${years} Year${addS(years)} ${months} Month${addS(months)} ${days} Day${addS(days)}`}</div>
  );
};

export default App;
