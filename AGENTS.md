# Agent Handbook: Neuroscience Tina

This project is a modular Next.js + TinaCMS landing page for a Healthcare/Neuroscience training platform.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **CMS**: TinaCMS 2.9 (Markdown-based, Local Mode by default)
- **Styling**: Tailwind CSS 3
- **Typography**: Playfair Display (Serif), Plus Jakarta Sans (Display)

## Directory Structure
- `tina/`: TinaCMS configuration and schema.
- `tina/collections/`: Collection definitions (e.g., `page.js`).
- `content/`: Markdown files for site content.
- `components/blocks/`: Modular React components for each page section.
- `app/`: Next.js App Router (Layouts, Pages).

## Conventions
1. **Schema-First**: Always define the block schema in `tina/collections/page.js` (or similar) before building the React component.
2. **Modular Blocks**: Use a block-per-section approach. Each block should be a self-contained component in `components/blocks/`.
3. **Visual Editing**: **CRITICAL**: Every editable element MUST have a `data-tina-field` attribute using the `tinaField` helper.
    - Example: `<h1 data-tina-field={tinaField(data, "title")}>{data.title}</h1>`
4. **TypeScript**: Generate types from Tina queries using `tina-lock.json` and internal CLI. Use these types for component props.

## Design Tokens
- **Primary**: `#4a7c59` (Green)
- **Accent**: `#d4a373` (Gold)
- **Background**: `#fdfcf8` (Warm White)
- **Text**: `#2d3436` (Dark Gray)

## Workflow
1. Define Block Template in `tina/collections/page.js`.
2. Create React implementation in `components/blocks/[BlockName].tsx`.
3. Register block in the block-renderer in `app/[...filename]/client-page.tsx`.
4. Validate visually in the TinaCMS editor at `/admin`.
