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
        // navigate to app.walltik.com
        window.location.href = 'https://app.walltik.com';
        // alert('The feature is under maintenance');
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
                        <div className="group">
                            <button className="flex items-center text-gray-700 hover:text-gray-900 font-medium">
                                Why Walltik ?
                                <ChevronDown className="ml-1 h-4 w-4" />
                            </button>

                            <div className="absolute left-0 mt-2 w-full bg-white shadow-lg rounded-lg border border-gray-100 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all z-50 pl-28 m-0 pt-5 pb-5  space-y-3 grid grid-cols-5">
                                <div className="flex items-start space-x-2 pl-28"></div>
                                <div className="flex items-start space-x-2 p-3">
                                    <Link href="/features/extension-services" className='flex items-center'>
                                        <Puzzle className="w-5 h-5 text-purple-600" />
                                        <p className="text-sm text-gray-700 ml-2">
                                            Extension Services
                                        </p>
                                    </Link>
                                </div>
                                <div className="flex items-start space-x-2 p-3">
                                    <Link href="/features/buying-service" className='flex items-center'>
                                        <ShoppingCart className="w-5 h-5 text-purple-600" />
                                        <p className="text-sm text-gray-700 ml-2">
                                            Buying Service
                                        </p>
                                    </Link>
                                </div>
                                <div className="flex items-start space-x-2 p-3">
                                    <Link href="/features/automated-update-tracking" className='flex items-center'>
                                        <RefreshCw className="w-5 h-5 text-purple-600" />
                                        <p className="text-sm text-gray-700 ml-2">
                                            Automated Update Tracking
                                        </p>
                                    </Link>
                                </div>
                                <div className="flex items-start space-x-2 pr-28"></div>
                            </div>
                        </div>

                        <div className="group">
                            <button className="flex items-center text-gray-700 hover:text-gray-900 font-medium">
                                Integrations
                                <ChevronDown className="ml-1 h-4 w-4" />
                            </button>
                            {/* Dropdown Menu */}
                            <div className="absolute left-0 mt-2 w-full bg-white shadow-lg rounded-lg border border-gray-100 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all pl-28 m-0 pt-5 pb-5 grid grid-cols-5 gap-1">
                                <div className="flex items-center space-x-5 hover:bg-gray-50 rounded-md pl-28 cursor-pointer"></div>
                                <div className="flex items-center space-x-5 hover:bg-gray-50 rounded-md p-3 cursor-pointer">
                                    <Link href="/tiktok" className='flex items-center'>
                                        <img src="/TikTok-Shop.svg" alt="TikTok" className="h-8 w-8" />
                                        <span className="text-xl text-gray-700 ml-2">
                                            TikTok
                                        </span>
                                    </Link>
                                </div>
                                <div className="flex items-center space-x-5 hover:bg-gray-50 rounded-md p-3 cursor-pointer">
                                    <Link href="/amazon" className='flex items-center'>
                                        <img src="/amazon-icon.svg" alt="Amazon" className="h-8 w-8" />
                                        <span className="text-xl text-gray-700 ml-2">
                                            Amazon
                                        </span>
                                    </Link>
                                </div>
                                <div className="flex items-center space-x-5 hover:bg-gray-50 rounded-md p-3 cursor-pointer">
                                    <Link href="/ebay" className='flex items-center'>
                                        <img src="/ebay-icon.svg" alt="eBay" className="h-8 w-8" />
                                        <span className="text-xl text-gray-700 ml-2">
                                            eBay
                                        </span>
                                    </Link>
                                </div>
                                <div className="flex items-center space-x-5 hover:bg-gray-50 rounded-md pl-28 cursor-pointer"></div>
                            </div>
                        </div>

                        <div className="relative group">
                            <Link href="/suppliers" className="flex items-center text-gray-700 hover:text-gray-900 font-medium">
                                Suppliers
                                {/* <ChevronDown className="ml-1 h-4 w-4" /> */}
                            </Link>
                        </div>


                        <Link href="/pricing" className="text-gray-700 hover:text-gray-900 font-medium">
                            Pricing
                        </Link>

                        <Link href="/contact-us" className="text-gray-700 hover:text-gray-900 font-medium">
                            Contact Us
                        </Link>
                    </nav>

                    {/* Action Buttons */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <Button variant="ghost" className="text-gray-700 hover:text-gray-900" onClick={() => showUnderDev()}>
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
                {
                    isMenuOpen && (
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
                                <Link href="/contact-us" className="text-gray-700 hover:text-gray-900 font-medium">
                                    Contact Us
                                </Link>
                                <div className="pt-4 space-y-2">
                                    <Button variant="ghost" className="w-full justify-start" onClick={() => showUnderDev()}>
                                        Sign In
                                    </Button>
                                    <Button className="w-full bg-gradient-purple-pink text-white">
                                        Get started
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
