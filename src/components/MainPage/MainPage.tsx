import Link from 'next/link';

const MainPage = () => {
  return (
    <section className="flex h-full flex-col items-center justify-center">
      <h1>Welcom Tarot Space</h1>
      <Link href="/introduce">start</Link>
    </section>
  );
};

export default MainPage;
