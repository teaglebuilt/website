import { NextPage } from 'next';
import Image from 'next/image';

const Portfolio: NextPage = () => {
  return (
    <div className="wrapper antialiased text-gray-900">
      <div className="border flex flex-col-reverse md:flex-row-reverse items-center max-w-5xl ">
        <div className="m-4 p-8 bg-white rounded-lg md:w-2/3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
        <div className="md:self-start md:w-1/3">
          <Image
            src="/images/portrait.png"
            layout="responsive"
            width={100}
            height={100}
            alt="random imgee"
            className="w-full object-cover object-center"
          />
          <div className="relative px-4 -mt-16">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-baseline">
                <h4 className="mt-1 text-xl font-semibold uppercase truncate tracking-wider">
                  Dillan Teagle
                </h4>
              </div>
              <div className="text-gray-600 uppercase text-xs font-semibold tracking-wider mx-auto">
                Senior Software Engineer
              </div>
              <span className="bg-red-200 text-red-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                Built Technologies
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
