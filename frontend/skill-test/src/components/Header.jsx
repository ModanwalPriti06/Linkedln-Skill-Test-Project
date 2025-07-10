import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-blue-700 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Employee Portal</div>
      <div className="hidden md:flex space-x-4">
        <a href="#" className="hover:underline">Dashboard</a>
        <a href="#" className="hover:underline">Reports</a>
        <a href="#" className="hover:underline">Settings</a>
      </div>
      <div className="md:hidden">
        <button onClick={() => setOpen(!open)}>
          ☰
        </button>
        {open && (
          <div className="absolute bg-white text-black right-4 mt-2 p-2 rounded shadow">
            <a href="#" className="block px-2 py-1">Dashboard</a>
            <a href="#" className="block px-2 py-1">Reports</a>
            <a href="#" className="block px-2 py-1">Settings</a>
          </div>
        )}
      </div>
    </header>
  );
}
