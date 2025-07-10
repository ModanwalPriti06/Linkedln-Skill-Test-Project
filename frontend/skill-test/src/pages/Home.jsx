import { useState } from 'react';
import Header from '../components/Header';
import GridView from '../components/GridView';
import TileView from '../components/TileView';
import EmployeeDetail from '../components/EmployeeDetail';

const sampleData = [
  {
    id: 1,
    name: 'John Doe',
    age: 30,
    class: 'A',
    subjects: ['Math', 'Science'],
    attendance: '95%'
  },
  {
    id: 2,
    name: 'Jane Smith',
    age: 25,
    class: 'B',
    subjects: ['English', 'History'],
    attendance: '90%'
  },
  {
    id: 3,
    name: 'Alice Johnson',
    age: 28,
    class: 'C',
    subjects: ['Biology', 'Chemistry'],
    attendance: '92%'
  },
  {
    id: 4,
    name: 'Robert Brown',
    age: 32,
    class: 'A',
    subjects: ['Physics', 'Math'],
    attendance: '88%'
  },
  {
    id: 5,
    name: 'Emily Davis',
    age: 27,
    class: 'B',
    subjects: ['Geography', 'English'],
    attendance: '93%'
  },
  {
    id: 6,
    name: 'Michael Wilson',
    age: 29,
    class: 'C',
    subjects: ['History', 'Science'],
    attendance: '91%'
  },
  {
    id: 7,
    name: 'Sarah Miller',
    age: 26,
    class: 'A',
    subjects: ['Math', 'Computer Science'],
    attendance: '97%'
  },
  {
    id: 8,
    name: 'David Anderson',
    age: 31,
    class: 'B',
    subjects: ['English', 'Civics'],
    attendance: '87%'
  },
  {
    id: 9,
    name: 'Laura Thomas',
    age: 24,
    class: 'C',
    subjects: ['Biology', 'History'],
    attendance: '89%'
  },
  {
    id: 10,
    name: 'James Jackson',
    age: 33,
    class: 'A',
    subjects: ['Physics', 'Math'],
    attendance: '94%'
  },
  {
    id: 11,
    name: 'Olivia White',
    age: 22,
    class: 'B',
    subjects: ['English', 'Psychology'],
    attendance: '96%'
  },
  {
    id: 12,
    name: 'William Harris',
    age: 35,
    class: 'C',
    subjects: ['Economics', 'Math'],
    attendance: '85%'
  }
];


export default function Home() {
  const [view, setView] = useState('grid');
  const [selected, setSelected] = useState(null);

  return (
    <>
      <Header />
    <div className="p-4">
        <div className="flex justify-end gap-2 mb-4">
          <button onClick={() => setView('grid')} className="bg-green-500 px-4 py-2 rounded">Grid View</button>
          <button onClick={() => setView('tile')} className="bg-green-500 px-4 py-2 rounded">Tile View</button>
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
