import { PortableTextBlock } from "sanity";

export interface Article {
  _id: string;
  _createdAt: string;
  title: string;
  description: string;
  slug: { current: string };
  estimatedReadingTime: number;
  sourceUrl: string;
  content: PortableTextBlock[];
  topics: Array<Topic>;
  author: { name: string; verified: boolean };
}

export interface Topic {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
}
