import TextWithImage from "@/components/TextWithImage";
import PagesComponent from "@/components/pages";
import Realities from "@/components/realities";
import StaffComponent from "@/components/staff";
import { homePage } from "@/constants";
import { sanityFetch } from "@/sanity/lib/fetch";
import { Pages, RealityCard, Staff, TextWithImageSection } from "@/sanity/lib/interfaces";
import { PAGES_QUERY, REALITIES_QUERY, STAFF_QUERY } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";
import { Reality } from "@/sanity/lib/interfaces";
export default async function Home() {
  const realitiesPromise = sanityFetch<Reality[]>({
    query: REALITIES_QUERY,
  });
  const pagesPromise = sanityFetch<Pages[]>({
    query: PAGES_QUERY,
  });
  const staffPromise = sanityFetch<Staff[]>({
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
      {homePage.map((section: TextWithImageSection, id: number) => (
        <TextWithImage
          key={id}
          _type="textWithImage"
          heading={section.heading}
          text={section.text}
          image_pos={section.image_pos}
          textWithImageUrl={section.textWithImageUrl}
          position={section.position}
          button={section.button}
          heading_cap={section.heading_cap}
          isDynamic={false}
        />
      ))}
    </main>
  );
}
