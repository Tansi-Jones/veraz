import { Article, Topic } from "@/types";
import { createClient, groq } from "next-sanity";
import { clientConfig } from "./config/client-config";

export async function getArticles(): Promise<Article[]> {
  return createClient(clientConfig).fetch(groq`*[_type == "article"]{
    _id,
    _createdAt,
    title,
    description,
    "slug": slug.current,
    sourceUrl,
    content,
    "numberOfCharacters": length(pt::text(content)),
    "estimatedWordCount": round(length(pt::text(content)) / 5),
    "estimatedReadingTime": round(length(pt::text(content)) / 5 / 180 ),
    topics[]->{title,slug}
  }`);
}

export async function getArticle(slug: string): Promise<Article> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "article" && slug.current == $slug][0]{
    _createdAt,
    title,
    "numberOfCharacters": length(pt::text(content)),
    "estimatedWordCount": round(length(pt::text(content)) / 5),
    "estimatedReadingTime": round(length(pt::text(content)) / 5 / 180 ),
    "slug": slug.current,
    sourceUrl,
    content,
    topics[]->{title,slug},
    author->{name,verified}
  }`,
    { slug }
  );
}

export async function getTopics(): Promise<Topic[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "topic"]{
    title,
    _id,
    slug
  }`
  );
}

export async function searchArticles(query: string): Promise<Article[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "article" && title match $query]{
    _createdAt,
    title,
    "numberOfCharacters": length(pt::text(content)),
    "estimatedWordCount": round(length(pt::text(content)) / 5),
    "estimatedReadingTime": round(length(pt::text(content)) / 5 / 180 ),
    "slug": slug.current,
    sourceUrl,
    description,
    topics[]->{title,slug}
  }`,
    { query }
  );
}

export async function discoverArticles(keyword: string): Promise<Article[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "article" && $keyword in topics[]->slug.current] {
      ...,
      topics[] -> {
              title,
              slug,
              _id
      },
    }
    `,
    { keyword }
  );
}
