import React from 'react';

interface Props {
  small?: boolean;
  black?: boolean;
}

const FORM_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSf6zcvRtmxCEONw1AKkWalgNs5aSOE-Mjb86tEYEspJRERe_Q/viewform?vc=0&c=0&w=1&flr=0&usp=mail_form_link"

export default function GetCast({ small, black }: Props) {
  const buttonClass = small ? "p-1 px-4" : "py-3 px-6 md:py-4 md:px-8 w-full md:w-auto text-2xl md:text-xl";
  const buttonText = small ? " Get Cast" : "Get Cast Today";
  const buttonColor = black ? "bg-black text-white" : "bg-white text-black";

  return (
    <a href={FORM_LINK} target="_blank" rel="noopener noreferrer">
      <button className={`border-2 font-bold border-black hover:bg-gray-200 rounded-lg ${buttonClass} ${buttonColor}`}>{buttonText}</button>
    </a>
  );
}