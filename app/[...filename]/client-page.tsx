"use client";
import { useTina } from "tinacms/dist/react";
import { Hero } from "../../components/blocks/Hero";
import { Narrative } from "../../components/blocks/Narrative";
import { FeatureGrid } from "../../components/blocks/FeatureGrid";
import { Mission } from "../../components/blocks/Mission";
import { ServiceCards } from "../../components/blocks/ServiceCards";
import { Cta } from "../../components/blocks/Cta";

export default function ClientPage(props: any) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <div>
      {data.page.blocks?.map((block: any, i: number) => {
        switch (block.__typename) {
          case "PageBlocksHero":
            return <Hero key={i} {...block} />;
          case "PageBlocksNarrative":
            return <Narrative key={i} {...block} />;
          case "PageBlocksFeatureGrid":
            return <FeatureGrid key={i} {...block} />;
          case "PageBlocksMission":
            return <Mission key={i} {...block} />;
          case "PageBlocksServiceCards":
            return <ServiceCards key={i} {...block} />;
          case "PageBlocksCta":
            return <Cta key={i} {...block} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
