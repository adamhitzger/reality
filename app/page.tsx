import PagesComponent from "@/components/pages";
import Realities from "@/components/realities";
import StaffComponent from "@/components/staff";
import { sanityFetch } from "@/sanity/lib/fetch";
import { PAGES_QUERY, REALITIES_QUERY, STAFF_QUERY } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity"


export default async function Home() {
  const realitiesPromise = await sanityFetch<SanityDocument[]>({
    query: REALITIES_QUERY
  });
  const pagesPromise = await sanityFetch<SanityDocument[]>({
    query: PAGES_QUERY
  });
  const staffPromise = await sanityFetch<SanityDocument[]>({
    query: STAFF_QUERY
  });
  const [realities, pages, staff] = await Promise.all([
    realitiesPromise,
    pagesPromise,
    staffPromise,
  ]);
  console.log(staff);
  console.log("--------------")

  console.log(pages);
  return (
    <main className="p-10 flex flex-col">
      <Realities realities={realities} />
      <PagesComponent pages={pages} />
      <StaffComponent staff={staff} />
    </main>
  );
}
