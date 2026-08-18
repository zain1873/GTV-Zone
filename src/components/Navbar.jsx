import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">MEG Logistics</Link>
        <div className="flex gap-4">
          <Link to="/" className="text-gray-600 hover:text-gray-900">Dashboard</Link>
          <Link to="/login" className="text-gray-600 hover:text-gray-900">Login</Link>
        </div>
      </div>
    </nav>
  );
}
