import React, { useState } from "react";
function Toggle() {
  const [isToggled, setIsToggled] = useState(false);
  const [display, setDisplay] = useState(true);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const handleDisable = () => {
    setDisplay(!display);
  };

  return (
    <div>
      <p>{isToggled ? "ON" : "OFF"}</p>
      <button
        // style={{
        //   padding: "5px",
        //   backgroundColor: isToggled ? "darkgreen" : "darkred",
        //   color: "white",
        //   borderRadius: "5px",
        // }}
        onClick={handleToggle}
      >
        {isToggled ? "Turn Off" : "Turn On"}
      </button>

      <br />
      <p>{display ? "Displayed" : "Hidden"}</p>
      <button
        // style={{
        //   backgroundColor: display ? "darkred" : "darkgreen",
        //   color: "white",
        //   padding: "5px",
        //   borderRadius: "5px",
        // }}
        onClick={handleDisable}
      >
        {display ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default Toggle;
