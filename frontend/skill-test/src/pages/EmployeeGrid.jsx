import { gql, useQuery } from '@apollo/client';

const GET_EMPLOYEES = gql`
  query GetEmployees($page: Int, $limit: Int) {
    employees(page: $page, limit: $limit) {
      id
      name
      age
      class
      attendance
    }
  }
`;

export default function EmployeeGrid() {
  const { loading, error, data } = useQuery(GET_EMPLOYEES, {
    variables: { page: 1, limit: 10 }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading employees</p>;

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {data.employees.map((emp) => (
        <div key={emp.id} className="bg-white rounded shadow p-4 hover:shadow-lg transition">
          <h2 className="text-lg font-semibold">{emp.name}</h2>
          <p>Age: {emp.age}</p>
          <p>Class: {emp.class}</p>
          <p>Attendance: {emp.attendance}</p>
        </div>
      ))}
    </div>
  );
}
