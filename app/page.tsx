import TextWithImage from "@/components/TextWithImage";
import { sanityFetch } from "@/sanity/lib/fetch";
import { RealityCard, SectionsOnMainPage, TextWithImageSection } from "@/sanity/lib/interfaces";
import { MAIN_SECTIONS, REALITIES_QUERY } from "@/sanity/lib/queries";
import Header from "@/components/header";

export default async function Home() {
  const realitiesPromise = await sanityFetch<RealityCard[]>({
    query: REALITIES_QUERY,
  });
  const sectionsPromise = await sanityFetch<SectionsOnMainPage[]>({
    query: MAIN_SECTIONS,
  });

  const [realities, sections] = await Promise.all([
    realitiesPromise,
    sectionsPromise
  ])
  console.log(realities);
  return (
    <main className="flex flex-col">
     
      <Header realities={realities}/>
      {sections.map((section: SectionsOnMainPage, id: number) => (
        <TextWithImage
          key={id}
          _type="textWithImage"
          heading={section.textWithImage.heading}
          text={section.textWithImage.text}
          image_pos={section.textWithImage.image_pos}
          textWithImageUrl={section.textWithImage.textWithImageUrl}
          position={section.textWithImage.position}
          button={section.textWithImage.button}
          heading_cap={section.textWithImage.heading_cap}
          isDynamic={true}
        />
      ))}
    </main>
  );
}
