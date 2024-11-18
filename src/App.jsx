import { useState } from 'react';
import Products from './Products.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold mb-8">Product Dashboard</h1>
        <Products />
      </div>
    </div>
  );
}

export default App;