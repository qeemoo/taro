'use client';

import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';

type MainButtonProps = {
  setHoveredLink: Dispatch<SetStateAction<string>>;
};

const MAIN_BUTTON = [
  { text: '시작하기', href: '/play', hoverKey: 'start' },
  { text: '알아보기', href: '/study', hoverKey: 'info' },
  { text: '연습하기', href: '/practice', hoverKey: 'tutorial' },
  { text: '더해보기', href: '/share', hoverKey: 'about' },
];

const MainButton = ({ setHoveredLink }: MainButtonProps) => {
  return (
    <ul className="flex h-full w-[70%] flex-col items-center justify-center gap-4">
      {MAIN_BUTTON.map(({ href, text, hoverKey }, index) => (
        <Link
          key={index}
          className={`flex h-28 w-[40rem] items-center justify-center rounded-full border-4 border-black ${[0, 3].includes(index) ? '-translate-x-10' : ''}`}
          href={href}
          onMouseEnter={() => setHoveredLink(hoverKey)}
          onMouseLeave={() => setHoveredLink('')}
        >
          <p className="text-3xl font-bold">{text}</p>
        </Link>
      ))}
    </ul>
  );
};

export default MainButton;
