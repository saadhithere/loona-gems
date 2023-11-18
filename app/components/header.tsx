import React from 'react';
import Link from 'next/link';
import GetCast from './GetCast';

export default function Header() {
    return (
        <header className="flex justify-between items-center w-full py-4 px-4 border-b border-gray-300">
            <Link href="/" className="text-lg font-medium text-gray-800 hover:text-gray-600">
                <div className="flex items-center">
                    <img
                    src="/logo.png"
                    alt="Logo"
                    className="h-9 w-9 md:h-12 md:w-12"
                    />
                </div>
            </Link>
            <nav>
                <div className="flex justify-center items-center">
                    {/* <Link href="/shows" className="text-md font-bold text-gray-500 hover:text-gray-600 mr-4 md:mr-8">
                        Shows
                    </Link>
                    <Link href="/talent" className="text-md font-bold text-gray-500 hover:text-gray-600 mr-4 md:mr-8">
                        Talent
                    </Link> */}
                    <GetCast small black/>
                </div>
            </nav>
        </header>
    );
}