import PagesComponent from "@/components/pages";
import Realities from "@/components/realities";
import StaffComponent from "@/components/staff";
import TextLeftComponent from "@/components/textLeft";
import TextLeftComponent2 from "@/components/textLeft2";
import TextLeftComponent3 from "@/components/textLeft3";
import TextRight from "@/components/textRight";
import TextRight2 from "@/components/textRight2";
import TextRight3 from "@/components/textRight3";
import { sanityFetch } from "@/sanity/lib/fetch";
import { PAGES_QUERY, REALITIES_QUERY, STAFF_QUERY } from "@/sanity/lib/queries";
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
  {/**
    const button = {
      url: "localhost:3000",
      text: "Koukni sem"
    }
    */}
  return (
    <main className="flex flex-col">
      <Realities realities={realities} />
      <PagesComponent pages={pages} />
      <StaffComponent staff={staff} />
      <TextLeftComponent />
      <TextRight />
      <TextLeftComponent2 />
      <TextRight2 />
      <TextLeftComponent3 />
      <TextRight3 />
    </main>
  );
}
