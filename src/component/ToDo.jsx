function ToDo() {
  return (
    <div>
      <h1>ExerCise Jsx</h1>
      <img
        src="https://react.dev/images/docs/scientists/MK3eW3As.jpg"
        alt="Katherine Johnson"
      />

      <ul>
        <li>Task 1</li>
        <li>Task 2</li>
        <li>Task 3</li>
      </ul>
      <button onClick={() => alert("Button clicked!")}>Click Me</button>
    </div>
  );
}

export default ToDo;
