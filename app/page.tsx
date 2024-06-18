import TextWithImage from "@/components/TextWithImage";
import Footer from "@/components/Footer";
import PagesComponent from "@/components/pages";
import Realities from "@/components/realities";
import StaffComponent from "@/components/staff";
import { homePage } from "@/constants";
import { sanityFetch } from "@/sanity/lib/fetch";
import { PAGES_QUERY, REALITIES_QUERY, STAFF_QUERY } from "@/sanity/lib/queries";
import { TextWithImageProps } from "@/types";
import { SanityDocument } from "next-sanity";
import Image from "next/image";

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
      <section
        className={`flex flex-wrap md:flex-nowrap h-screen mb-8 bg-gray-100`}>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-20 mx-auto relative">
          <Image src="/logo.jpg" alt="logo" fill={true} className="object-cover w-full"/>
        </div>
        <div className={`w-1/2 relative flex justify-center`}>
            <Image src="/hero-image.jpg" alt="test" className="object-cover w-full"  fill={true} />
        </div>
      </section>
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
      <Footer />
    </main>
  );
}
