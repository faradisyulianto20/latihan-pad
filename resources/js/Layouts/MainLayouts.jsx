import React from 'react';
import Navbar from '@/Components/Navbar';

export default function MainLayout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="p-6">
        {children}
      </main>
    </div>
  );
}