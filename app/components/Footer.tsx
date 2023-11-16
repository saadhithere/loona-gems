import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <header className="flex flex-col md:flex-row justify-between items-center w-full py-4 px-4" style={{ backgroundColor: '#f8f9fa' }}>
             <nav>
                <ul className="flex">
                    <li>
                        <Link href="https://www.instagram.com/malangfilms/" target="_blank">
                            <img src="/instagram.png" alt="Instagram" className="h-6 w-6 cursor-pointer hover:opacity-75" />
                        </Link>
                    </li>
                    {/* <li>
                        <Link href="https://www.youtube.com/@mastmalangfilms" target="_blank">
                            <img src="/youtube.png" alt="YouTube" className="h-6 w-6 cursor-pointer hover:opacity-75 ml-4" />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.facebook.com/profile.php?id=61552385343762" target="_blank">
                            <img src="/facebook.png" alt="Facebook" className="h-6 w-6 cursor-pointer hover:opacity-75 ml-4" />
                        </Link>
                    </li> */}
                    <li>
                        <Link href="https://www.tiktok.com/@malangfilms" target="_blank">
                            <img src="/tiktok.png" alt="tiktok" className="h-6 w-6 cursor-pointer hover:opacity-75 ml-4" />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://wa.me/message/KMKTK5VNF3LAP1" target="_blank">
                            <img src="/whatsapp.png" alt="whatsapp" className="h-6 w-6 cursor-pointer hover:opacity-75 ml-4" />
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0">
                <div className="flex items-center">
                    <span className="ml-2">© 2023 Loona Gems</span>
                </div>
            </div>
           
        </header>
    );
}