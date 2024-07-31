import Link from 'next/link';

const Information = () => {
  return (
    <section className="flex h-full items-center justify-center gap-10">
      <Link href="/information/card" className="h-96 w-96 bg-pink-300">
        카드
      </Link>
      <Link href="/information/spread" className="h-96 w-96 bg-pink-300">
        스프레드
      </Link>
    </section>
  );
};

export default Information;
