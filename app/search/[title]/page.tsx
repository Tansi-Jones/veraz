import { DiscoverTopics } from "@/components/DiscoverTopics";
import { Header } from "@/components/Header";
import { searchArticles } from "@/sanity/sanity-utils";
import moment from "moment";
import Link from "next/link";

type Props = {
  params: {
    title: string;
  };
};

export default async function Search({ params }: Props) {
  const decodedString = decodeURIComponent(params.title).slice(0, -1);
  const results = await searchArticles(decodedString);

  return (
    <>
      <Header title={decodedString} />

      <div className="flex flex-col lg:flex-row lg:justify-end space-x-5 md:space-x-10 lg:space-x-20">
        <main className="space-y-5 max-w-[90%] mx-auto lg:mx-0 lg:w-[52%] xl:w-[60%]">
          {results.map(
            ({
              _id,
              slug,
              title,
              description,
              _createdAt,
              estimatedReadingTime,
              topics,
            }) => (
              <article key={_id}>
                <Link href={`/articles/${slug}`}>
                  <h1 className="text-gray-009 inline-block dark:text-gray-005 text-[1.4rem] md:text-2xl font-medium hover:underline cursor-pointer">
                    {title}
                  </h1>
                </Link>
                <p className="text-gray-004 dark:text-gray-006 text-base truncateText">
                  {description}
                </p>
                <div className="text-gray-004 text-base dark:text-gray-006 italic flex items-center space-x-6 mt-2 ${styles.moreInfo}">
                  <p className="moreInfo">
                    {moment(_createdAt).format("MMMM DD, YYYY")}
                  </p>
                  <p>{estimatedReadingTime} min read</p>
                  <div className="hidden md:flex item-center space-x-3">
                    {topics.map((topic: any, index) => (
                      <Link
                        href={`/discover/${topic.slug.current}`}
                        key={index}
                        className="text-gray-004 text-sm md:text-base leading-3 tracking-wide bg-gray-002 dark:text-gray-300 dark:bg-gray-009 rounded-full py-1 px-3"
                      >
                        {topic.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </article>
            )
          )}
        </main>

        <DiscoverTopics />
      </div>
    </>
  );
}
