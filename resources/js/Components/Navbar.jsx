import React, { useState } from "react";
import { Link } from '@inertiajs/react';
import { Button } from "@/Components/ui/button";
import { Menu, X } from 'lucide-react';
import { motion, useScroll, useTransform } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    const { scrollY } = useScroll();

    const navbarWidth = useTransform(scrollY, [0, 100], ['100%', '80%']);
    const navbarOpacity = useTransform(scrollY, [0, 100], [1, 0.9]);
    const navbarRadius = useTransform(scrollY, [0, 100], ['0.5rem', '9999px']);
    const navbarShadow = useTransform(scrollY, [0, 100], ['0px 0px 0px rgba(0,0,0,0)', '0px 4px 6px rgba(0,0,0,0.1)']);

    return (
        <motion.nav 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ 
                width: navbarWidth, 
                margin: 'auto', 
                position: 'fixed', 
                top: '32px', 
                left: 0, 
                right: 0, 
                zIndex: 1000, 
                borderRadius: navbarRadius, 
                opacity: navbarOpacity,
                boxShadow: navbarShadow
            }}
        >
            <div className="bg-white dark:bg-[hsl(var(--background))] py-2 px-6 lg:px-12 text-black dark:text-white flex items-center justify-between rounded-full dark:border-white border-black ">
                <h1 className="text-lg font-bold">Sistem Informasi Akademik</h1>
                <div className="md:hidden">
                    <Button variant="ghost" size="icon" onClick={toggleMenu}>
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </Button>
                </div>
                <div className="hidden md:flex space-x-4">
                    <Link href="/">Home</Link>
                    <Link href="/pendaftaran">Pendaftaran</Link>
                    <Link href="/pembayaran">Pembayaran</Link>
                </div>
                {isOpen && (
                    <div className="block md:hidden absolute top-16 left-0 bg-white bg-[hsl(var(--background))] px-8 shadow-md space-y-4 w-full py- border-[hsl(var(--border))] rounded-lg pb-6">
                        <Link href="/" className="block">Home</Link>
                        <Link href="/pendaftaran" className="block" >Pendaftaran</Link>
                        <Link href="/pembayaran" className="block">Pembayaran</Link>
                    </div>
                )}
            </div>
        </motion.nav>
    );
}
