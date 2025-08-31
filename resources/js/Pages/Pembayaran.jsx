import React from "react";
import MainLayout from "@/Layouts/MainLayouts";
import { motion } from "motion/react";

export default function Pembayaran() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Halaman Pembayaran</h1>
            <p>Ini adalah halaman pembayaran.</p>
        </div>
    );
}

Pembayaran.layout = page => <MainLayout children={page} />;