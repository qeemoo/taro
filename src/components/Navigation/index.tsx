'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAVIGATION_CONTENT = [
  {
    id: 1,
    url: '/play',
    content: '타로를 시작해 보세요!',
    activeContent: '운명을 확인해 보는 중',
  },
  {
    id: 2,
    url: '/study',
    content: '타로에 대해서 더 알고 싶으세요?',
    activeContent: '타로에 대해서 알아가는 중',
  },
  {
    id: 3,
    url: '/practice',
    content: '하는 방법을 모르신다구요?',
    activeContent: '튜토리얼 진행중',
  },
  {
    id: 4,
    url: '/share',
    content: '다른 사람들과 공유하고 싶다구요?',
    activeContent: '의견을 공유하는 중',
  },
];

const Navigation = () => {
  const route = usePathname();
  const pathname = route.split('/')[1];

  return (
    <nav className="border-b-4">
      <div className="mx-10 flex items-center justify-between text-center text-2xl">
        {NAVIGATION_CONTENT.map((item) => (
          <Link key={item.id} className={`p-5 ${pathname === item.url ? 'text-red-500' : ''}`} href={item.url}>
            {pathname === item.url ? item.activeContent : item.content}
          </Link>
        ))}
        <div>로그인</div>
      </div>
    </nav>
  );
};

export default Navigation;
