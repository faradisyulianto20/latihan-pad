import React from "react";
import Navbar from "@/Components/Navbar";
import ModeToggle from "@/Components/mode-toggle";
import { Toaster } from "sonner";

import DotGrid from './DotGrid';
import { useTheme } from "@/components/theme-provider";

export default function MainLayout({ children }) {
<<<<<<< HEAD
  const { theme } = useTheme();

  const baseColor = theme === "dark" ? "#111111" : "#ffffff";

  return (
    <div style={{ width: '100%', height: '600px', position: 'relative' }}>
      <Navbar /> 
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -10,
        pointerEvents: 'none'
      }}>
        <DotGrid
          dotSize={3}
          gap={15}
          baseColor={baseColor}
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
        <div className="fixed bottom-4 left-4 z-50">
            <ModeToggle/>
        </div>
      
      <main className="pt-[100px] px-6">
        {children}
      </main>
      <Toaster richColors position="top-right" />
    </div>
  );
}
