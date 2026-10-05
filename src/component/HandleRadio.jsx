import React, { useState } from "react";
function HandleRadio() {
  const [gender, setGender] = useState("Male");
  const [city, setCity] = useState("Delhi");
  return (
    <div>
      <h1>Handle Radio Button</h1>
      <form>
        <h4>Choose your gender:-{gender}</h4>
        <input
          type="radio"
          name="gender"
          value="Male"
          onChange={(e) => setGender(e.target.value)}
          id="male"
          checked={gender === "Male"}
        />
        <label htmlFor="male"> Male</label>
        <input
          type="radio"
          name="gender"
          value="Female"
          onChange={(e) => setGender(e.target.value)}
          id="female"
          checked={gender === "Female"}
        />
        <label htmlFor="female"> Female</label>
        <br />
        <br />
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          name="city"
          style={{ width: "100px", height: "30px", border: "1px solid black" }}
        >
          <option value="">Select City</option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Bangalore">Bangalore</option>
        </select>
        <h4>Selected City:-{city}</h4>
      </form>
    </div>
  );
}

export default HandleRadio;
