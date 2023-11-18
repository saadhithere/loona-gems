import React from 'react';

interface Props {
  small?: boolean;
  black?: boolean;
}

export default function ShopNow({ small, black }: Props) {
  const buttonClass = small ? "p-1 px-4" : "py-3 px-6 md:py-4 md:px-8 w-full md:w-auto text-2xl md:text-xl";
  const buttonText = "Shop Now";
  const buttonColor = black ? "bg-black text-white" : "bg-white text-black";

  return (
    <a href="/shop" rel="noopener noreferrer">
      <button className={`border-2 font-bold border-black hover:bg-gray-200 rounded-lg ${buttonClass} ${buttonColor}`}>{buttonText}</button>
    </a>
  );
}