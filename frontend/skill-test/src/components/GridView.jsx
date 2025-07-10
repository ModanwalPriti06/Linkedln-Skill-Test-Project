export default function GridView({ data }) {
  return (
    <div className="grid grid-cols-5 gap-4 p-4">
      {data.map((emp) => (
        <div key={emp.id} className="bg-white shadow p-2 border rounded text-sm">
          <div><strong>Name:</strong> {emp.name}</div>
          <div><strong>Age:</strong> {emp.age}</div>
          <div><strong>Class:</strong> {emp.class}</div>
          <div><strong>Subjects:</strong> {emp.subjects.join(', ')}</div>
          <div><strong>Attendance:</strong> {emp.attendance}</div>
        </div>
      ))}
    </div>
  );
}
