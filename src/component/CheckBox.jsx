import React, { useState } from "react";
function CheckBox() {
  const [skills, setSkills] = useState([]);
  const handleChange = (e) => {
    console.log(e.target.value, e.target.checked);
    if (e.target.checked) {
      setSkills([...skills, e.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== e.target.value));
    }
  };

  return (
    <div>
      <h1>Select Your skill</h1>
      <input type="checkbox" id="PHP" value="PHP" onChange={handleChange} />
      <label htmlFor="PHP">PHP</label>
      <br />
      <input type="checkbox" id="React" value="React" onChange={handleChange} />
      <label htmlFor="React">React</label>
      <br />
      <input
        type="checkbox"
        id="Angular"
        value="Angular"
        onChange={handleChange}
      />
      <label htmlFor="Angular">Angular</label>
      <br />
      <input
        type="checkbox"
        id="JavaScript"
        value="JavaScript"
        onChange={handleChange}
      />
      <label htmlFor="JavaScript">JavaScript</label>
      <br />
      <input type="checkbox" id="Node" value="Node" onChange={handleChange} />
      <label htmlFor="Node">Node</label>
      <h1>{skills.toString()}</h1>
    </div>
  );
}

export default CheckBox;
