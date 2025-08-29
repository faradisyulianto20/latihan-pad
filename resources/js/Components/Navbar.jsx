import { Link } from '@inertiajs/react';
import { Button } from "@/Components/ui/button";
import React, { useState } from "react";
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <nav className='shadow-md dark:shadow-gray-700'>
                <div className="py-4 px-16 text-black dark:text-white flex items-center justify-between">
                    <h1 className="text-lg font-bold">Sistem Informasi Akademik</h1>
                        <div className="md:hidden">
                            <Button variant="ghost" size="icon" onClick={toggleMenu}>
                                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </Button>
                        </div>
                    <div className="hidden md:flex space-x-4">
                        <Button>
                            <Link href="/">
                                Home
                            </Link>
                        </Button>
                        <Button>
                            <Link href="/pendaftaran">
                                Pendaftaran
                            </Link>
                        </Button>
                        <Button>
                            <Link href="/pembayaran">
                                Pembayaran
                            </Link>
                        </Button>
                    </div>
                    {isOpen && (
                        <div className="block md:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-800 px-16 shadow-md space-y-4 py-4">
                            <Button className="block w-full">
                                <Link href="/">
                                    Home
                                </Link>
                            </Button>
                            <Button className="block w-full">
                                <Link href="/pendaftaran">
                                    Pendaftaran
                                </Link>
                            </Button>
                            <Button className="block w-full">
                                <Link href="/pembayaran">
                                    Pembayaran
                                </Link>
                            </Button>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
}