function Event() {
  const handleClick = (name) => {
    alert(name);
  };
  return (
    <div>
      <h1>Event Component</h1>
      <button onClick={() => handleClick("apple")}>Click Me</button>
    </div>
  );
}

export default Event;
