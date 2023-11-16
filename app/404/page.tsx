import React from 'react';
import Header from '../components/header';

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="text-center">
          <p className="text-2xl lg:text-4xl font-bold text-gray-800 mb-8">
            nothing to see here
          </p>
        </div>
      </div>
    </main>
  );
}