'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

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
        <h1 className="ml-10 mt-10 text-4xl text-white">타로 제목 뭐하냐..</h1>
        <Image
          className="absolute right-[-50%] top-1/2 -translate-y-1/2 transform rounded-full border-8 border-white"
          src={getImageSrc()}
          alt="main"
          width={550}
          height={550}
        />
      </div>
      <div className="flex h-full w-[70%] flex-col items-center justify-center gap-4">
        <Link
          className="flex h-28 w-[40rem] -translate-x-10 items-center justify-center rounded-full border-4 border-black"
          href="/play"
          onMouseEnter={() => setHoveredLink('start')}
          onMouseLeave={() => setHoveredLink('')}
        >
          <div>시작하기</div>
        </Link>
        <Link
          className="flex h-28 w-[40rem] items-center justify-center rounded-full border-4 border-black"
          href="/information"
          onMouseEnter={() => setHoveredLink('info')}
          onMouseLeave={() => setHoveredLink('')}
        >
          <div>카드정보</div>
        </Link>
        <Link
          className="flex h-28 w-[40rem] items-center justify-center rounded-full border-4 border-black"
          href="/tutorial"
          onMouseEnter={() => setHoveredLink('tutorial')}
          onMouseLeave={() => setHoveredLink('')}
        >
          <div>하는방법</div>
        </Link>
        <Link
          className="flex h-28 w-[40rem] -translate-x-10 items-center justify-center rounded-full border-4 border-black"
          href="/about"
          onMouseEnter={() => setHoveredLink('about')}
          onMouseLeave={() => setHoveredLink('')}
        >
          <div>정보</div>
        </Link>
      </div>
    </section>
  );
};

export default MainPage;
