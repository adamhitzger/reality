import TextWithImage from "@/components/TextWithImage";
import Footer from "@/components/Footer";
import PagesComponent from "@/components/pages";
import Realities from "@/components/realities";
import StaffComponent from "@/components/staff";
import { homePage } from "@/constants";
import { sanityFetch } from "@/sanity/lib/fetch";
import { Pages, RealityCard, Staff, TextWithImageSection } from "@/sanity/lib/interfaces";
import { PAGES_QUERY, REALITIES_QUERY, STAFF_QUERY } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";
<<<<<<< HEAD
import { Reality } from "@/sanity/lib/interfaces";
=======
import Image from "next/image";

>>>>>>> b47e70ecd9993590c48df342243478fd1cbed6d7
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
      <Footer />
    </main>
  );
}
