export default function EmployeeDetail({ employee, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-1/2">
        <h2 className="text-xl font-bold">{employee.name}</h2>
        <p><strong>Age:</strong> {employee.age}</p>
        <p><strong>Class:</strong> {employee.class}</p>
        <p><strong>Subjects:</strong> {employee.subjects.join(', ')}</p>
        <p><strong>Attendance:</strong> {employee.attendance}</p>
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Back</button>
      </div>
    </div>
  );
}
