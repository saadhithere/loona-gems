import React from 'react';
import Header from './components/header';
import GetCast from './components/GetCast';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="text-center">
          <p className="text-3xl lg:text-6xl font-bold text-gray-800 mb-8">
            <span className="text-2xl lg:text-4xl">Welcome to</span> Loona <span className="lg:text-4xl">Gems</span>
          </p>
          <div className="flex flex-col justify-center items-center mt-8 md:flex-row md:justify-center md:items-center">
            {/* <GetCast /> */}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}