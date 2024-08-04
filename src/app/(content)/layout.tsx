import { PropsWithChildren } from 'react';

import Navigation from '@/components/Navigation';

const ContentLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
    </>
  );
};

export default ContentLayout;
