import { DiscoverTopics } from "@/components/DiscoverTopics";
import { Header } from "@/components/Header";
import { PageFilter } from "@/components/PageFilter";
import { getArticles } from "@/sanity/sanity-utils";

export default async function Articles() {
  const articles = await getArticles();
  return (
    <>
      <Header />
      <div className="flex flex-col lg:flex-row lg:justify-end space-x-5 md:space-x-10 lg:space-x-20">
        <main className="space-y-5 max-w-[90%] mx-auto lg:mx-0 lg:w-[52%] xl:w-[60%]">
          <PageFilter articles={articles} />
        </main>

        <DiscoverTopics />
      </div>
    </>
  );
}
