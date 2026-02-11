/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "Page Content",
  name: "page",
  path: "content/page",
  format: "mdx",
  fields: [
    {
      type: "object",
      list: true,
      name: "blocks",
      label: "Sections",
      ui: {
        visualSelector: true,
      },
      templates: [
        {
          name: "hero",
          label: "Hero",
          fields: [
            { type: "string", name: "badge", label: "Badge Text" },
            { type: "string", name: "headline", label: "Headline" },
            { type: "string", name: "subheadline", label: "Subheadline", ui: { component: "textarea" } },
            { type: "string", name: "ctaPrimary", label: "Primary CTA Label" },
            { type: "string", name: "ctaSecondary", label: "Secondary CTA Label" },
            { type: "image", name: "image", label: "Hero Image" },
          ],
        },
        {
          name: "narrative",
          label: "Narrative (About)",
          fields: [
            { type: "string", name: "badge", label: "Badge Text" },
            { type: "string", name: "title", label: "Title" },
            { type: "rich-text", name: "content", label: "Content" },
            { type: "string", name: "quote", label: "Pull Quote", ui: { component: "textarea" } },
            { type: "image", name: "image", label: "Portrait Image" },
          ],
        },
        {
          name: "featureGrid",
          label: "Feature Grid (Problems)",
          fields: [
            { type: "string", name: "headline", label: "Section Headline" },
            { type: "string", name: "subheadline", label: "Section Subheadline", ui: { component: "textarea" } },
            {
              type: "object",
              list: true,
              name: "items",
              label: "Grid Items",
              fields: [
                { type: "string", name: "icon", label: "Material Icon Name" },
                { type: "string", name: "iconColor", label: "Icon Color (primary/accent)", options: ["primary", "accent"] },
                { type: "string", name: "title", label: "Title" },
                { type: "string", name: "text", label: "Description", ui: { component: "textarea" } },
              ],
            },
          ],
        },
        {
          name: "mission",
          label: "Mission (Transformation)",
          fields: [
            { type: "string", name: "badge", label: "Badge Text" },
            { type: "string", name: "title", label: "Title" },
            {
              type: "object",
              list: true,
              name: "features",
              label: "Feature List",
              fields: [
                { type: "string", name: "icon", label: "Material Icon Name" },
                { type: "string", name: "title", label: "Title" },
                { type: "string", name: "text", label: "Description" },
              ],
            },
            { type: "image", name: "image", label: "Side Image" },
          ],
        },
        {
          name: "serviceCards",
          label: "Service Cards (Formats)",
          fields: [
            { type: "string", name: "headline", label: "Headline" },
            { type: "string", name: "subheadline", label: "Subheadline" },
            {
              type: "object",
              list: true,
              name: "cards",
              label: "Cards",
              fields: [
                { type: "string", name: "badge", label: "Badge" },
                { type: "string", name: "title", label: "Title" },
                { type: "string", name: "text", label: "Description", ui: { component: "textarea" } },
                { type: "boolean", name: "highlight", label: "Highlight Card?" },
                { type: "string", name: "buttonText", label: "Button Label" },
                {
                  type: "object",
                  list: true,
                  name: "listItems",
                  label: "List Items",
                  fields: [
                    { type: "string", name: "text", label: "Item Text" },
                    { type: "string", name: "icon", label: "Icon Override" },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "cta",
          label: "Call to Action",
          fields: [
            { type: "string", name: "headline", label: "Headline" },
            { type: "string", name: "subheadline", label: "Subheadline" },
            { type: "string", name: "ctaPrimary", label: "Primary Button" },
            { type: "string", name: "ctaSecondary", label: "Secondary Button" },
          ],
        },
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
