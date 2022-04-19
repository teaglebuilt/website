import Link from 'next/link';

const IndexHero: React.FC = () => {
  return (
    <div className="container mx-auto px-6 flex flex-col justify-between items-center relative py-4">
      <div className="flex flex-col">
        <img src="/images/logo.avif" className="rounded-full w-28 mx-auto" />
        <p className="text-3xl my-6 text-center dark:text-white">
          Hi, I&#x27;m Dillan 🤘
        </p>
        <h2 className="max-w-3xl text-5xl md:text-6xl font-bold mx-auto dark:text-white text-gray-800 text-center py-2">
          A love for digital engineering at every level.
        </h2>
        <div className="flex items-center justify-center mt-4">
          <Link href="/contact">
            <a className="uppercase py-2 my-2 px-4 md:mt-16 bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md">
              CONNECT WITH ME
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IndexHero;
