'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X, Puzzle, ShoppingCart, RefreshCcw, RefreshCw } from 'lucide-react';
import { signIn, signOut, useSession } from "next-auth/react";

export default function Header() {
    const { data: session } = useSession();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const showUnderDev = () => {
        const appURL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.walltik.com';
        window.location.href = appURL;
    }

    return (
        <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <img
                                src="https://res.cloudinary.com/dqg6ernew/image/upload/v1748675830/file_hogvb1.svg"
                                alt="Walltik"
                                className="h-8 w-auto"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        <Link href="#deals" className="text-gray-700 hover:text-gray-900 font-medium">
                            Deals
                        </Link>

                        <Link href="#categories" className="text-gray-700 hover:text-gray-900 font-medium">
                            Categories
                        </Link>

                        <Link href="#how-it-works" className="text-gray-700 hover:text-gray-900 font-medium">
                            How It Works
                        </Link>

                        <Link href="/contact-us" className="text-gray-700 hover:text-gray-900 font-medium">
                            Contact Us
                        </Link>
                    </nav>

                    {/* Action Buttons */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <Button variant="ghost" className="text-gray-700 hover:text-gray-900" onClick={() => window.location.href = 'https://deals.walltik.com'}>
                            Login
                        </Button>
                        <Button className="bg-gradient-purple-pink text-white hover:opacity-90" onClick={() => window.location.href = 'https://deals.walltik.com'}>
                            Start 
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>

                {/* Mobile menu */}
                {
                    isMenuOpen && (
                        <div className="lg:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
                                <Link href="#deals" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
                                    Deals
                                </Link>
                                <Link href="#categories" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
                                    Categories
                                </Link>
                                <Link href="#how-it-works" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
                                    How It Works
                                </Link>
                                <Link href="/contact-us" className="text-gray-700 hover:text-gray-900 font-medium">
                                    Contact Us
                                </Link>
                                <div className="pt-4 space-y-2">
                                    <Button variant="ghost" className="w-full justify-start" onClick={() => window.location.href = 'https://deals.walltik.com'}>
                                        Login
                                    </Button>
                                    <Button className="w-full bg-gradient-purple-pink text-white" onClick={() => window.location.href = 'https://deals.walltik.com'}>
                                        Find Deals
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div >
        </header >
    );
}
