import Link from 'next/link';

const MainPage = () => {
  return (
    <section className="bg-main flex h-full flex-col items-center justify-center gap-20 bg-cover bg-no-repeat opacity-90">
      <div className="flex h-[20rem] w-[60rem] flex-col justify-center gap-5 text-center">
        <h1 className="text-9xl font-extrabold text-stone-200">TAROT SPACE</h1>
      </div>
      <div className="flex gap-4">
        <Link className="flex h-[12rem] w-60 items-center justify-center bg-red-400" href="/play">
          <div>play</div>
        </Link>
        <Link className="flex h-[12rem] w-60 items-center justify-center bg-red-400" href="/information">
          <div>information</div>
        </Link>
        <Link className="flex h-[12rem] w-60 items-center justify-center bg-red-400" href="/tutorial">
          <div>tutorial</div>
        </Link>
        <Link className="flex h-[12rem] w-60 items-center justify-center bg-red-400" href="/about">
          <div>about</div>
        </Link>
      </div>
    </section>
  );
};

export default MainPage;
