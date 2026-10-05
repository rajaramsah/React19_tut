import { useState } from "react";
function Controlled() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div>
      <div>Controlled Component</div> <br /> <br />
      <form action="" method="get">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter text..."
        />
        <br /> <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password..."
        />
        <br /> <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email..."
        />
        <br /> <br />
        <button type="submit">Submit</button>
        <button
          onClick={() => {
            setName("");
            setPassword("");
            setEmail("");
          }}
        >
          Clear
        </button>
        <br />
        <h3> Name: {name}</h3>
        <h3> Password: {password}</h3>
        <h3> Email: {email}</h3>
      </form>
    </div>
  );
}
export default Controlled;
