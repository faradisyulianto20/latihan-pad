import React from 'react';
import Navbar from '@/Components/Navbar';
import ModeToggle from '@/Components/mode-toggle';

export default function MainLayout({ children }) {
  return (
    <div>
        <div className="absolute top-4 right-4">
            <ModeToggle/>
        </div>
      <Navbar /> 
      <main className="p-6">
        {children}
      </main>
    </div>
  );
}