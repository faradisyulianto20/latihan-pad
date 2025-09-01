import React from "react";
import Navbar from "@/Components/Navbar";
import ModeToggle from "@/Components/mode-toggle";
import { Toaster } from "sonner";

export default function MainLayout({ children }) {
    return (
        <div>
            <div className="fixed bottom-4 left-4">
                <ModeToggle />
            </div>
            <Navbar />
            <main className="pt-[100px] px-6">{children}</main>
            <Toaster richColors position="top-right" />
        </div>
    );
}
