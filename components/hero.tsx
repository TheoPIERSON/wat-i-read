import React from "react";

interface HeroProps {
  text: string;
}

export const Hero: React.FC<HeroProps> = ({ text }) => {
  return <h1 className="w-100 text-9xl font-black tracking-widest ml-5">{text}</h1>;
};
