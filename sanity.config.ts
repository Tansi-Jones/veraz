import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import article from "./sanity/schemas/article-schema";
import topic from "./sanity/schemas/topic-schema";

const config = defineConfig({
  projectId: "of9wzs18",
  dataset: "production",
  title: "Veraz Wiki",
  apiVersion: "2023-07-19",
  basePath: "/admin",
  plugins: [deskTool()],

  schema: { types: [article, topic] },
});

export default config;
