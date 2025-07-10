export default function TileView({ data, onSelect }) {
  return (
    <div className="flex flex-wrap gap-4 p-4">
      {data.map(emp => (
        <div key={emp.id} className="bg-white shadow p-4 w-60 rounded relative">
          <h3 className="font-semibold">{emp.name}</h3>
          <p>{emp.class}</p>
          <p>{emp.age} yrs</p>
          <div className="mt-2 flex justify-between text-sm">
            <button onClick={() => onSelect(emp)}>View</button>
            <button>Edit</button>
            <button className="text-red-500">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
