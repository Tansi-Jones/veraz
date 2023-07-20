import { Header } from "@/components/Header";
import {
  PhotoIcon,
  PlayCircleIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid";

type Props = {
  params: {
    id: string;
  };
};

export default function Article({ params }: Props) {
  return (
    <>
      <Header />
      <div className="flex flex-col lg:flex-row lg:justify-end space-x-5 md:space-x-10 lg:space-x-20">
        <main className="space-y-5 max-w-[90%] mx-auto lg:mx-0 lg:w-[52%] xl:w-[60%]">
          <h1 className="text-gray-009 inline-block dark:text-gray-005 text-3xl font-medium">
            The climate change hoax in 2022
          </h1>
          <section className="text-gray-004 text-base dark:text-gray-006 italic flex items-center space-x-6 mt-2 ${styles.moreInfo}">
            <p className="moreInfo">May 1, 2023</p>
            <p>3 min read</p>

            <button className="text-primary flex items-center space-x-2 hover:underline">
              <span>
                <PlayCircleIcon className="h-6 w-6" />
              </span>
              <span>Listen to article</span>
            </button>
          </section>
          <section>
            <h1 className="text-gray-009 inline-block dark:text-gray-005 text-[1.6rem] md:text-[1.75rem] font-normal">
              Causes of climate change
            </h1>
            <p className="text-gray-004 dark:text-gray-006 text-lg leading-8 m-1">
              Burning fossil fuels, cutting down forests and farming livestock
              are increasingly influencing the climate and the earth’s
              temperature. This adds enormous amounts of greenhouse gases to
              those naturally occurring in the atmosphere, increasing the
              greenhouse effect and global warming.
            </p>
            <button className="text-primary flex items-center space-x-2 mt-1 hover:underline">
              <span>
                <VideoCameraIcon className="h-5 w-5" />
              </span>
              <span>watch video</span>
            </button>
          </section>
          <section>
            <h1 className="text-gray-009 inline-block dark:text-gray-005 text-[1.6rem] md:text-[1.75rem] font-normalcursor-pointer">
              Global warming
            </h1>
            <p className="text-gray-004 dark:text-gray-006 text-lg leading-8 mb-1">
              2011-2020 was the warmest decade recorded, with global average
              temperature reaching 1.1°C above pre-industrial levels in 2019.
              Human-induced global warming is presently increasing at a rate of
              0.2°C per decade.
            </p>
            <p className="text-gray-004 dark:text-gray-006 text-lg leading-8 mb-1">
              2011-2020 was the warmest decade recorded, with global average
              temperature reaching 1.1°C above pre-industrial levels in 2019.
              Human-induced global warming is presently increasing at a rate of
              0.2°C per decade.
            </p>
            <button className="text-primary flex items-center space-x-2 mt-1 hover:underline">
              <span>
                <PhotoIcon className="h-5 w-5" />
              </span>
              <span>view image here</span>
            </button>
          </section>
        </main>

        <aside className="max-w-[90%] mx-auto lg:mx-0 lg:max-w-sm flex flex-col my-16 lg:my-0 space-y-8">
          <section>
            <h3 className="text-lg text-gray-009 dark:text-gray-005 mb-1">
              More from veraz
            </h3>
            <div className="space-y-3">
              <p className="text-gray-004 dark:text-gray-006 hover:underline cursor-pointer">
                # Cancel culture
              </p>
              <p className="text-gray-004 dark:text-gray-006 hover:underline cursor-pointer">
                # The involvement of the USA in Russian Ukraine conflict
              </p>
              <p className="text-gray-004 dark:text-gray-006 hover:underline cursor-pointer">
                # The fall of the US Dollar
              </p>
            </div>
          </section>
          <section>
            <h3 className="text-lg text-gray-009 dark:text-gray-005 mb-1">
              Discover more on this topic
            </h3>
            <div className="flex flex-wrap">
              <button className="block text-gray-004 text-sm md:text-base tracking-wide bg-gray-002 dark:text-gray-300 dark:bg-gray-009 rounded-full py-1 px-3 mt-2 mr-2">
                climate hoax
              </button>
              <button className="block text-gray-004 text-sm md:text-base tracking-wide bg-gray-002 dark:text-gray-300 dark:bg-gray-009 rounded-full py-1 px-3 mt-2 mr-2">
                global warming
              </button>
              <button className="block text-gray-004 text-sm md:text-base tracking-wide bg-gray-002 dark:text-gray-300 dark:bg-gray-009 rounded-full py-1 px-3 mt-2 mr-2">
                carbon emmision
              </button>
              <button className="block text-gray-004 text-sm md:text-base tracking-wide bg-gray-002 dark:text-gray-300 dark:bg-gray-009 rounded-full py-1 px-3 mt-2 mr-2">
                temperature
              </button>
              <button className="block text-gray-004 text-sm md:text-base tracking-wide bg-gray-002 dark:text-gray-300 dark:bg-gray-009 rounded-full py-1 px-3 mt-2 mr-2">
                climate hoax
              </button>
              <button className="block text-gray-004 text-sm md:text-base tracking-wide bg-gray-002 dark:text-gray-300 dark:bg-gray-009 rounded-full py-1 px-3 mt-2 mr-2">
                global warming
              </button>
              <button className="block text-gray-004 text-sm md:text-base tracking-wide bg-gray-002 dark:text-gray-300 dark:bg-gray-009 rounded-full py-1 px-3 mt-2 mr-2">
                carbon emmision
              </button>
              <button className="block text-gray-004 text-sm md:text-base tracking-wide bg-gray-002 dark:text-gray-300 dark:bg-gray-009 rounded-full py-1 px-3 mt-2 mr-2">
                temperature
              </button>
            </div>
          </section>
        </aside>
      </div>
    </>
  );
}
