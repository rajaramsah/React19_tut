import React, { useEffect, useState } from "react";

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [format, setFormat] = useState("24");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleFormatChange = (e) => {
    setFormat(e.target.value);
  };

  const formattedTime = currentTime.toLocaleTimeString("en-US", {
    hour12: format === "12",
  });

  return (
    <div>
      <h1>Digital Clock</h1>

      <label htmlFor="time-format">Time Format:- </label>

      <select id="time-format" value={format} onChange={handleFormatChange}>
        <option value="12">12-Hour</option>
        <option value="24">24-Hour</option>
      </select>

      <p className="clock-display">{formattedTime}</p>
    </div>
  );
}

export default Clock;
