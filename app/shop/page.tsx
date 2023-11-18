import React from 'react';
import Header from '../components/header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="text-center">
          <p className="text-3xl lg:text-6xl font-bold text-gray-800 mb-8">
            <span className="text-2xl lg:text-4xl">Coming Soon</span>
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}