import Students from "./Students";

function ArrayNested() {
  const students = [
    {
      name: "John Doe",
      age: 20,
      course: "Computer Science",
    },
    {
      name: "Jane Smith",
      age: 22,
      course: "Mathematics",
    },
  ];
  return (
    <div>
      <h2>Array Nested Loop</h2>
      {students.map((student, index) => (
        <Students student={student} index={index} />
      ))}
    </div>
  );
}
export default ArrayNested;
