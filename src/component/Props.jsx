function Props({ studentDetails }) {
  return (
    <div>
      <table border="1" width="100%">
        <thead>
          <tr>
            <th colSpan="3">Student Details</th>
          </tr>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{studentDetails.name}</td>
            <td>{studentDetails.age}</td>
            <td>{studentDetails.course}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Props;
