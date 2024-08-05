'use client';

import Image from 'next/image';
import { useState } from 'react';

import MainButton from './MainButton';

const MainPage = () => {
  const [hoveredLink, setHoveredLink] = useState('');

  const getImageSrc = () => {
    switch (hoveredLink) {
      case 'start':
        return '/image/main_start.jpg';
      case 'info':
        return '/image/main_info.jpg';
      case 'tutorial':
        return '/image/main_tutorial.jpg';
      case 'about':
        return '/image/main_about.jpg';
      default:
        return '/image/main_title.jpg';
    }
  };

  return (
    <section className="flex h-full items-center justify-center gap-20 bg-cover bg-no-repeat opacity-90">
      <div className="relative h-full w-[30%] gap-5 bg-black">
        <h1 className="ml-10 mt-10 text-4xl font-extrabold text-white">The Tarot Journey</h1>
        <Image
          className="absolute right-[-50%] top-1/2 -translate-y-1/2 transform rounded-full border-8 border-white"
          src={getImageSrc()}
          alt="main"
          width={550}
          height={550}
        />
      </div>
      <MainButton setHoveredLink={setHoveredLink} />
    </section>
  );
};

export default MainPage;
