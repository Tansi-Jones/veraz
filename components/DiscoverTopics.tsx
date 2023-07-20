import { getTopics } from "@/sanity/sanity-utils";
import Link from "next/link";

export const DiscoverTopics = async () => {
  const topics = await getTopics();
  return (
    <aside className="max-w-[90%] mx-auto lg:max-w-sm flex flex-col my-14 lg:my-0">
      <h3 className="text-lg text-gray-009 dark:text-gray-005 ">
        Discover more on this topic
      </h3>
      <div className="flex flex-wrap">
        {topics.map(({ _id, title, slug }) => (
          <Link
            href={`/discover/${slug.current}`}
            key={_id}
            className="block text-gray-004 text-sm md:text-base tracking-wide bg-gray-002 dark:text-gray-300 dark:bg-gray-009 rounded-full py-1 px-3 mt-2 mr-2"
          >
            {title}
          </Link>
        ))}
      </div>
    </aside>
  );
};
