function Students({ student, index }) {
  return (
    <div
      key={index}
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
        backgroundColor: "#f0f0f0",
        borderRadius: "5px",
        borderBottom: "2px solid #000",
        width: "300px",
      }}
    >
      <h3>Student {index + 1}</h3>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Course: {student.course}</p>
    </div>
  );
}
export default Students;
