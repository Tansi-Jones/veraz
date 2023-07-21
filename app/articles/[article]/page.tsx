import { DiscoverTopics } from "@/components/DiscoverTopics";
import { Header } from "@/components/Header";
import { ImageRender } from "@/components/ImageRender";
import { ShareArticle } from "@/components/ShareArticle";
import { clientConfig } from "@/sanity/config/client-config";
import { getArticle } from "@/sanity/sanity-utils";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";
import { LinkIcon } from "@sanity/icons";
import { default as imageUrlBuilder } from "@sanity/image-url";
import moment from "moment";
import Link from "next/link";

type Props = {
  params: {
    article: string;
  };
};

export default async function Article({ params }: Props) {
  const slug = params.article;
  const article = await getArticle(slug);

  return (
    <>
      <Header />
      <div className="flex flex-col lg:flex-row lg:justify-end space-x-5 md:space-x-10 lg:space-x-20">
        <main className="space-y-5 max-w-[90%] mx-auto lg:mx-0 lg:w-[52%] xl:w-[60%]">
          <h1 className="text-gray-009 inline-block dark:text-gray-005 text-3xl font-medium">
            {article.title}
          </h1>
          <section className="text-gray-004 text-base dark:text-gray-006 italic flex items-center space-x-6 mt-2 ${styles.moreInfo}">
            <p className="moreInfo">
              {moment(article._createdAt).format("MMMM DD, YYYY")}
            </p>
            <p>{article.estimatedReadingTime} min read</p>
            <ShareArticle
              title={article.title}
              description={article.description}
            />
            {/* <button className="text-primary flex items-center space-x-2 hover:underline">
              <span>
                <PlayCircleIcon className="h-6 w-6" />
              </span>
              <span>Listen to article</span>
            </button> */}
          </section>
          <section>
            <PortableText value={article.content} components={components} />
          </section>
          <hr className="border-gray-009" />
          <div className="text-primary flex items-center hover:underline">
            <LinkIcon className="h-8 w-8" />
            <Link href={article.sourceUrl} className="text-lg" target="_blank">
              Article Source
            </Link>
          </div>
        </main>

        <DiscoverTopics />
      </div>
    </>
  );
}

const SampleImageComponent = ({ value }: { value: any }) => {
  const builder = imageUrlBuilder({
    clientConfig: clientConfig,
  });

  const urlFor = (source: any) => builder.image(source);
  const { width, height } = getImageDimensions(value);

  return (
    <>
      <ImageRender
        src={urlFor(value).auto("format").fit("max").width(1000).toString()}
        alt={value.alt || " "}
        width={width}
        height={height}
      />
    </>
  );
};

const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-gray-009 inline-block dark:text-gray-005 text-[1.6rem] md:text-[1.75rem] font-normal">
        {children}
      </h1>
    ),
    normal: ({ children }) => (
      <p className="text-gray-004 dark:text-gray-006 text-lg leading-8 mb-5">
        {children}
      </p>
    ),
  },

  types: {
    image: SampleImageComponent,
  },
};
