import { useState } from 'react';
import Header from '../components/Header';
import GridView from '../components/GridView';
import TileView from '../components/TileView';
import EmployeeDetail from '../components/EmployeeDetail';

const sampleData = [
  {
    id: 1, name: 'John Doe', age: 30, class: 'A', subjects: ['Math', 'Science'], attendance: '95%'
  },
  {
    id: 2, name: 'Jane Smith', age: 25, class: 'B', subjects: ['English', 'History'], attendance: '90%'
  }
];

export default function Home() {
  const [view, setView] = useState('grid');
  const [selected, setSelected] = useState(null);

  return (
    <>
      <Header />

<h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>      <div className="p-4">
        <div className="flex justify-end gap-2 mb-4">
          <button onClick={() => setView('grid')} className="bg-gray-200 px-4 py-2 rounded">Grid View</button>
          <button onClick={() => setView('tile')} className="bg-gray-200 px-4 py-2 rounded">Tile View</button>
        </div>

        {view === 'grid' ? (
          <GridView data={sampleData} />
        ) : (
          <TileView data={sampleData} onSelect={setSelected} />
        )}

        {selected && <EmployeeDetail employee={selected} onClose={() => setSelected(null)} />}
      </div>
    </>
  );
}
