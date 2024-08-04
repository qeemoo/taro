'use client';

import { SpreadsType } from '@/lib/types';

interface MenuBarProps {
  handleSpreadChange: (spread: keyof SpreadsType) => void;
}

const MenuBar = ({ handleSpreadChange }: MenuBarProps) => {
  return (
    <div className="flex justify-between gap-10 p-6">
      <button onClick={() => handleSpreadChange('oneCard')}>원 카드</button>
      <button onClick={() => handleSpreadChange('threeCard')}>쓰리 카드</button>
      <button onClick={() => handleSpreadChange('celticCross')}>켈트 십자가</button>
      <button onClick={() => handleSpreadChange('treeOfLife')}>생명의 나무</button>
      <button onClick={() => handleSpreadChange('horseshoe')}>말 발굽</button>
      <button onClick={() => handleSpreadChange('fullMoon')}>보름달</button>
    </div>
  );
};

export default MenuBar;
