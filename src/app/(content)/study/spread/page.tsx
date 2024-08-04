'use client';

import Image from 'next/image';
import { useState } from 'react';

import MenuBar from '@/components/StudyPage/SpreadPage/MenuBar';
import { SpreadsType } from '@/lib/types';

const spreads: SpreadsType = {
  oneCard: {
    title: '원 카드 스프레드',
    description: '원 카드 스프레드 설명',
    image: '/image/spread_one_card.jpg',
  },
  threeCard: {
    title: '쓰리 카드 스프레드',
    description: '쓰리 카드 스프레드 설명',
    image: '/image/spread_three_card.jpg',
  },
  celticCross: {
    title: '켈트 십자가 스프레드',
    description: '켈트 십자가 스프레드 설명',
    image: '/image/spread_celtic_cross.jpg',
  },
  treeOfLife: {
    title: '생명의 나무 스프레드',
    description: '생명의 나무 스프레드 설명',
    image: '/image/spread_tree_of_life.jpg',
  },
  horseshoe: {
    title: '말 발굽 스프레드',
    description: '말 발굽 스프레드 설명',
    image: '/image/spread_horseshoe.jpg',
  },
  fullMoon: {
    title: '보름달 스프레드',
    description: '보름달 스프레드 설명',
    image: '/image/spread_full_moon.jpg',
  },
};

const Spread = () => {
  const [selectedSpread, setSelectedSpread] = useState<keyof SpreadsType>('oneCard');

  const handleSpreadChange = (spread: keyof SpreadsType) => {
    setSelectedSpread(spread);
  };

  return (
    <div className="mx-auto mt-10 flex h-[43.75rem] w-[75rem] flex-col border-4">
      <MenuBar handleSpreadChange={handleSpreadChange} />
      <div className="flex h-full w-full gap-20 border-2 p-10">
        <div className="flex w-[24rem] flex-col gap-20 border-2">
          <h1 className="text-4xl">{spreads[selectedSpread].title}</h1>
          <p>{spreads[selectedSpread].description}</p>
        </div>
        <div className="relative flex-1">
          <Image src={spreads[selectedSpread].image} alt="이미지" fill style={{ objectFit: 'contain' }} />
        </div>
      </div>
    </div>
  );
};

export default Spread;
