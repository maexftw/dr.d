"use client";
import React from "react";
import { useTina } from "tinacms/dist/react";
import type { PageQuery } from "../../tina/__generated__/types";

import { Header } from "../../components/blocks/Header";
import { Footer } from "../../components/blocks/Footer";
import { Hero } from "../../components/blocks/Hero";
import { Narrative } from "../../components/blocks/Narrative";
import { PainPoints } from "../../components/blocks/PainPoints";
import { Mission } from "../../components/blocks/Mission";
import { ServiceCards } from "../../components/blocks/ServiceCards";
import { Cta } from "../../components/blocks/Cta";

interface ClientPageProps {
  query: string;
  variables: {
    relativePath: string;
  };
  data: { page: PageQuery["page"] };
}

export default function ClientPage(props: ClientPageProps) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <>
      <Header />
      <main>
        {data.page.blocks?.map((block, i) => {
          if (!block) return null;
          switch (block.__typename) {
            case "PageBlocksHero":
              return <Hero key={i} data={block} />;
            case "PageBlocksNarrative":
              return <Narrative key={i} data={block} />;
            case "PageBlocksPainPoints":
              return <PainPoints key={i} data={block} />;
            case "PageBlocksMission":
              return <Mission key={i} data={block} />;
            case "PageBlocksServiceCards":
              return <ServiceCards key={i} data={block} />;
            case "PageBlocksCta":
              return <Cta key={i} data={block} />;
            default:
              return null;
          }
        })}
      </main>
      <Footer />
    </>
  );
}
