function Loop() {
  const userData = ["Ram", "Shyam", "Mohan", "Sohan"];
  const userData2 = [
    { name: "Ram", age: 20, course: "Computer Science" },
    { name: "Shyam", age: 21, course: "Bank Manager" },
  ];
  return (
    <div>
      <h1>Loop in jsx with Map Function</h1>
      <ul>
        {userData.map((user, i) => (
          <li key={i}>{user}</li>
        ))}
      </ul>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
          {userData2.map((user, i) => (
            <tr key={i}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Loop;
