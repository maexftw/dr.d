const heroTemplate = {
  name: "hero",
  label: "Hero",
  fields: [
    { name: "tagline", label: "Tagline", type: "string" },
    { name: "headline", label: "Headline", type: "string" },
    { name: "description", label: "Description", type: "string" },
    { name: "ctaPrimary", label: "CTA Primary Text", type: "string" },
    { name: "ctaSecondary", label: "CTA Secondary Text", type: "string" },
    { name: "image", label: "Image", type: "image" },
    { name: "quoteText", label: "Quote Text", type: "string" },
    { name: "quoteAuthor", label: "Quote Author", type: "string" },
  ],
};

const narrativeTemplate = {
  name: "narrative",
  label: "Narrative",
  fields: [
    { name: "sectionLabel", label: "Section Label", type: "string" },
    { name: "headline", label: "Headline", type: "string" },
    { name: "body", label: "Body Text", type: "rich-text" },
    { name: "quote", label: "Large Quote", type: "string" },
    { name: "image", label: "Image", type: "image" },
  ],
};

const painPointsTemplate = {
  name: "painPoints",
  label: "Pain Points",
  fields: [
    { name: "headline", label: "Headline", type: "string" },
    { name: "subheadline", label: "Subheadline", type: "string" },
    {
      name: "items",
      label: "Pain Points",
      type: "object",
      list: true,
      fields: [
        { name: "icon", label: "Icon Name", type: "string" },
        { name: "title", label: "Title", type: "string" },
        { name: "description", label: "Description", type: "string" },
      ],
    },
  ],
};

const missionTemplate = {
  name: "mission",
  label: "Mission/Transformation",
  fields: [
    { name: "sectionLabel", label: "Section Label", type: "string" },
    { name: "headline", label: "Headline", type: "string" },
    {
      name: "features",
      label: "Features",
      type: "object",
      list: true,
      fields: [
        { name: "icon", label: "Icon Name", type: "string" },
        { name: "title", label: "Title", type: "string" },
        { name: "description", label: "Description", type: "string" },
      ],
    },
    { name: "image", label: "Image", type: "image" },
  ],
};

const serviceCardsTemplate = {
  name: "serviceCards",
  label: "Service Cards",
  fields: [
    { name: "headline", label: "Headline", type: "string" },
    { name: "subheadline", label: "Subheadline", type: "string" },
    {
      name: "cards",
      label: "Cards",
      type: "object",
      list: true,
      fields: [
        { name: "tag", label: "Tag", type: "string" },
        { name: "title", label: "Title", type: "string" },
        { name: "description", label: "Description", type: "string" },
        { name: "features", label: "Features", type: "string", list: true },
        { name: "ctaText", label: "CTA Text", type: "string" },
        { name: "featured", label: "Featured?", type: "boolean" },
      ],
    },
  ],
};

const ctaTemplate = {
  name: "cta",
  label: "CTA Banner",
  fields: [
    { name: "headline", label: "Headline", type: "string" },
    { name: "description", label: "Description", type: "string" },
    { name: "ctaPrimary", label: "CTA Primary Text", type: "string" },
    { name: "ctaSecondary", label: "CTA Secondary Text", type: "string" },
  ],
};

/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "Pages",
  name: "page",
  path: "content/page",
  format: "mdx",
  fields: [
    {
      name: "blocks",
      label: "Page blocks",
      type: "object",
      list: true,
      templates: [
        heroTemplate,
        narrativeTemplate,
        painPointsTemplate,
        missionTemplate,
        serviceCardsTemplate,
        ctaTemplate,
      ],
    },
  ],
  ui: {
    router: ({ document }) => {
      if (document._sys.filename === "home") {
        return `/`;
      }
      return undefined;
    },
  },
};
