import React from "react";

const App = () => {
  const setDate = new Date("9/9/2020");
  const today = new Date();
  const diff = Math.abs(setDate.getTime() - today.getTime());
  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  const months = 12 - Math.abs(today.getMonth() - setDate.getMonth());

  return (
    <div>{`${years} Year${years > 1 ? "s" : ""} and ${months} Months`}</div>
  );
};

export default App;
