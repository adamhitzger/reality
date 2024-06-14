import TextWithImage from "@/components/TextWithImage";
import PagesComponent from "@/components/pages";
import Realities from "@/components/realities";
import StaffComponent from "@/components/staff";
import { homePage } from "@/constants";
import { sanityFetch } from "@/sanity/lib/fetch";
import { PAGES_QUERY, REALITIES_QUERY, STAFF_QUERY } from "@/sanity/lib/queries";
import { TextWithImageProps } from "@/types";
import { SanityDocument } from "next-sanity";

export default async function Home() {
  const realitiesPromise = sanityFetch<SanityDocument[]>({
    query: REALITIES_QUERY,
  });
  const pagesPromise = sanityFetch<SanityDocument[]>({
    query: PAGES_QUERY,
  });
  const staffPromise = sanityFetch<SanityDocument[]>({
    query: STAFF_QUERY,
  });

  const [realities, pages, staff] = await Promise.all([
    realitiesPromise,
    pagesPromise,
    staffPromise,
  ]);

  console.log(staff);
  console.log("--------------");
  console.log(pages);
  return (
    <main className="flex flex-col">
      <Realities realities={realities} />
      <PagesComponent pages={pages} />
      <StaffComponent staff={staff} />
      {homePage.map((section: TextWithImageProps, id: number) => (
        <TextWithImage
          key={id}
          heading={section.heading}
          text={section.text}
          image_pos={section.image_pos}
          image={section.image}
          position={section.position}
          button={section.button}
          heading_cap={section.heading_cap}
          isDynamic={false}
        />
      ))}
    </main>
  );
}
