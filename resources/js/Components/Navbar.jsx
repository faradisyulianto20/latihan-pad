import { Link } from '@inertiajs/react';
import { Button } from "@/Components/ui/button";
import React from "react";

export default function Navbar() {
    return (
        <>
            <nav>
                <div className="py-4 px-16 text-black dark:text-white flex items-center justify-between">
                    <h1 className="text-lg font-bold">Sistem Informasi Akademik</h1>
                    <div className="space-x-4">
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
                </div>
            </nav>
        </>
    );
}