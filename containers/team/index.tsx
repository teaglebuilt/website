import Image from 'next/image';
import React from 'react';

const Team: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900 mb-8">
      <div className="container px-6 py-10 mx-auto">
        <div className="xl:flex xl:items-center xL:-mx-4">
          <div className="xl:w-1/2 xl:mx-4">
            <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
              Partners
            </h1>

            <p className="max-w-2xl mt-4 text-gray-500 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              incidunt ex placeat modi magni quia error alias, adipisci rem
              similique, at omnis eligendi optio eos harum.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-0 xl:mx-4 xl:w-1/2 md:grid-cols-2">
            <div>
              <Image
                className="object-cover rounded-xl h-64 w-full"
                src="/images/portrait.png"
                width={200}
                height={400}
                alt=""
              />

              <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                Michael Mead
              </h1>

              <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">
                Senior Software Engineer
              </p>
            </div>

            <div>
              <Image
                className="object-cover rounded-xl h-64 w-full"
                src="/images/portrait.png"
                width={200}
                height={400}
                alt=""
              />

              <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                Phil Teagle
              </h1>

              <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">
                CEO Performalyze, Director of Engineering
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
