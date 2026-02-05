import 'dotenv/config';
import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
    branch,
    clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID, // Get this from tina.io
    token: process.env.TINA_TOKEN, // Get this from tina.io

    build: {
        outputFolder: "admin",
        publicFolder: "public",
        basePath: "/dr.d", // Required for GitHub Pages subdirectory deployment
    },
    media: {
        tina: {
            mediaRoot: "",
            publicFolder: "public",
        },
    },
    schema: {
        collections: [
            {
                name: "page",
                label: "Pages",
                path: "content/pages",
                format: "md",
                fields: [
                    {
                        type: "string",
                        name: "title",
                        label: "Page Title",
                        isTitle: true,
                        required: true,
                    },
                    {
                        type: "object",
                        name: "header",
                        label: "Header",
                        fields: [
                            { type: "string", name: "title", label: "Title" },
                            { type: "string", name: "subtitle", label: "Subtitle" },
                        ],
                    },
                    {
                        type: "object",
                        name: "hero",
                        label: "Hero Section",
                        fields: [
                            { type: "string", name: "badge", label: "Badge Text" },
                            { type: "string", name: "headline", label: "Headline (Rich Text supported via patches or just plain text for now, using string for simplicity initially)", ui: { component: "textarea" } },
                            { type: "string", name: "subheadline", label: "Subheadline", ui: { component: "textarea" } },
                            { type: "image", name: "image", label: "Hero Image" },
                            { type: "string", name: "ctaPrimary", label: "Primary CTA Label" },
                            { type: "string", name: "ctaSecondary", label: "Secondary CTA Label" },
                        ],
                    },
                    {
                        type: "object",
                        name: "mission",
                        label: "Mission Section",
                        fields: [
                            { type: "string", name: "badge", label: "Badge" },
                            { type: "string", name: "title", label: "Title" },
                            { type: "rich-text", name: "content", label: "Content" },
                            { type: "image", name: "image", label: "Image" },
                        ]
                    }
                    // Adding more fields later as we migrate sections
                ],
            },
        ],
    },
});
