import { Header } from "@/components/Header";
import { alphabets, dummyData } from "@/constant";
import Link from "next/link";

export default function Articles() {
  return (
    <>
      <Header />

      <div className="flex flex-col lg:flex-row lg:justify-end space-x-5 md:space-x-10 lg:space-x-20">
        <main className="space-y-5 max-w-[90%] mx-auto lg:mx-0 lg:w-[52%] xl:w-[60%]">
          <section className="flex items-center justify-between">
            {alphabets.map((item, index) => (
              <button
                key={index}
                className={`text-lg text-primary hover:underline`}
              >
                {item}
              </button>
            ))}
          </section>

          {dummyData.map((item, index) => (
            <article key={index}>
              <Link href={`/article/${item.title}`}>
                <h1 className="text-gray-009 inline-block dark:text-gray-005 text-[1.4rem] md:text-2xl font-medium hover:underline cursor-pointer">
                  {item.title}
                </h1>
              </Link>
              <p className="text-gray-004 dark:text-gray-006 text-base truncateText">
                {item.description}
              </p>
              <div className="text-gray-004 text-base dark:text-gray-006 italic flex items-center space-x-6 mt-2 ${styles.moreInfo}">
                <p className="moreInfo">May 1, 2023</p>
                <p>3 min read</p>
                <div className="hidden md:flex item-center space-x-3">
                  <button className="text-gray-004 text-sm md:text-base leading-3 tracking-wide bg-gray-002 dark:text-gray-300 dark:bg-gray-009 rounded-full py-1 px-3">
                    climate hoax
                  </button>
                  <button className="text-gray-004 text-sm md:text-base leading-3 tracking-wide bg-gray-002 dark:text-gray-300 dark:bg-gray-009 rounded-full py-1 px-3">
                    global warming
                  </button>
                </div>
              </div>
            </article>
          ))}
        </main>

        <aside className="max-w-[90%] mx-auto lg:max-w-sm flex flex-col my-14 lg:my-0">
          <h3 className="text-lg text-gray-009 dark:text-gray-005 ">
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
        </aside>
      </div>
    </>
  );
}
