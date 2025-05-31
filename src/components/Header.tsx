'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                        <div className="relative group">
                            <button className="flex items-center text-gray-700 hover:text-gray-900 font-medium">
                                Why Walltik ?
                                {/* <ChevronDown className="ml-1 h-4 w-4" /> */}
                            </button>
                            {/* Dropdown would go here */}
                        </div>

                        <div className="relative group">
                            <button className="flex items-center text-gray-700 hover:text-gray-900 font-medium">
                                Integrations
                                {/* <ChevronDown className="ml-1 h-4 w-4" /> */}
                            </button>
                        </div>

                        <div className="relative group">
                            <button className="flex items-center text-gray-700 hover:text-gray-900 font-medium">
                                Suppliers
                                {/* <ChevronDown className="ml-1 h-4 w-4" /> */}
                            </button>
                        </div>

                        <div className="relative group">
                            <button className="flex items-center text-gray-700 hover:text-gray-900 font-medium">
                                Resources
                                {/* <ChevronDown className="ml-1 h-4 w-4" /> */}
                            </button>
                        </div>

                        <Link href="/pricing" className="text-gray-700 hover:text-gray-900 font-medium">
                            Pricing
                        </Link>
                    </nav>

                    {/* Action Buttons */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <Button variant="ghost" className="text-gray-700 hover:text-gray-900">
                            Sign In
                        </Button>
                        <Button className="bg-gradient-purple-pink text-white hover:opacity-90">
                            Get started
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
                {isMenuOpen && (
                    <div className="lg:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
                            <Link href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
                                Why Walltik ?
                            </Link>
                            <Link href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
                                Integrations
                            </Link>
                            <Link href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
                                Suppliers
                            </Link>
                            <Link href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
                                Resources
                            </Link>
                            <Link href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
                                Pricing
                            </Link>
                            <div className="pt-4 space-y-2">
                                <Button variant="ghost" className="w-full justify-start">
                                    Sign In
                                </Button>
                                <Button className="w-full bg-gradient-purple-pink text-white">
                                    Get started
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
