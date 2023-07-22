import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import article from "./sanity/schemas/article-schema";
import author from "./sanity/schemas/author-schema";
import topic from "./sanity/schemas/topic-schema";

const config = defineConfig({
  projectId: "of9wzs18",
  dataset: "production",
  title: "Veraz Wiki",
  apiVersion: "2023-07-19",
  basePath: "/admin",
  plugins: [deskTool(), visionTool()],

  schema: { types: [article, topic, author] },
});

export default config;
