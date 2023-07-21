"use client";

import { alphabets } from "@/constant";
import { Article } from "@/types";
import moment from "moment";
import Link from "next/link";
import { useState } from "react";

export const PageFilter = ({ articles }: any) => {
  const [filterLetter, setFilterLetter] = useState<string | null>(null);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>(articles);

  function sortByTitleAscending(a: Article, b: Article): number {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();
    if (titleA < titleB) return -1;
    if (titleA > titleB) return 1;
    return 0;
  }

  function filterByLetter(letter: string): void {
    const filtered = articles
      .filter(
        (article: Article) =>
          article.title.charAt(0).toUpperCase() === letter.toUpperCase()
      )
      .sort(sortByTitleAscending);
    setFilteredArticles(filtered);
    setFilterLetter(letter);
  }

  function clearFilter(): void {
    setFilteredArticles(articles);
    setFilterLetter(null);
  }

  return (
    <div>
      <section className="flex items-center justify-start flex-wrap space-x-2 md:space-x-5 mb-5">
        {alphabets.map((letter, index) => (
          <button
            key={index}
            className={`text-lg text-primary hover:underline`}
            onClick={() => filterByLetter(letter)}
          >
            {letter}
          </button>
        ))}
        <button
          onClick={clearFilter}
          className="text-base md:text-lg text-gray-004"
        >
          Clear
        </button>
      </section>

      {filteredArticles.map((article: Article) => (
        <article key={article._id} className="mb-4">
          <Link href={`/articles/${article.slug}`}>
            <h1 className="text-gray-009 inline-block dark:text-gray-005 text-[1.4rem] md:text-2xl font-medium hover:underline cursor-pointer">
              {article.title}
            </h1>
          </Link>
          <p className="text-gray-004 dark:text-gray-006 text-base truncateText">
            {article.description}
          </p>
          <div className="text-gray-004 text-base dark:text-gray-006 italic flex items-center space-x-6 ${styles.moreInfo}">
            <p className="moreInfo">
              {moment(article._createdAt).format("MMMM DD, YYYY")}
            </p>
            <p>{article.estimatedReadingTime} min read</p>
            <div className="hidden md:flex item-center space-x-3">
              {article.topics.map(({ title, slug }: any) => (
                <Link
                  href={`/discover/${slug.current}`}
                  key={title}
                  className="text-gray-004 text-sm md:text-base leading-3 tracking-wide bg-gray-002 dark:text-gray-300 dark:bg-gray-009 rounded-full py-1 px-3"
                >
                  {title}
                </Link>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};
