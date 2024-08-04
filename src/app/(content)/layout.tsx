import { PropsWithChildren } from 'react';

import Navigation from '@/components/Navigation';

const ContentLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="h-full">
      <Navigation />
      <section>{children}</section>
    </main>
  );
};

export default ContentLayout;
