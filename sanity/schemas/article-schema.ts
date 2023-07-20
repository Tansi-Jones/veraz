const article = {
  name: "article",
  title: "Articles",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "sourceUrl",
      title: "Source URL",
      type: "url",
      placeholder: "https://veraz.wiki",
      required: false,
      default: "https://veraz.wiki",
      description:
        "Include the official source URL for this article. If none, leave blank.",
    },
    {
      name: "topics",
      title: "Topics",
      type: "array",
      of: [{ type: "reference", to: [{ type: "topic" }] }],
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "caption",
              type: "string",
              title: "Image caption",
              description: "Caption displayed below the image.",
            },
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
              description: "Important for SEO and accessiblity.",
            },
          ],
        },
      ],
    },
    {
      name: "approved",
      title: "Approved",
      type: "boolean",
      description: "Is this article approved for publication?",
    },
  ],
};

export default article;
