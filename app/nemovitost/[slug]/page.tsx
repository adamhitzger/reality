import { SanityDocument } from "next-sanity"
import { notFound } from "next/navigation"
import { REALITY_QUERY } from "@/sanity/lib/queries"
import { sanityFetch } from "@/sanity/lib/fetch"
import RealityComponent from "@/components/reality";

export default async function Page({ params }: { params: { slug: string } }) {
    const reality = await sanityFetch<SanityDocument>({ query: REALITY_QUERY, params });

    console.log(reality);
    if (!reality) {
        return notFound()
    }
    return (
        <main>
            <RealityComponent reality={reality} />
        </main>
    )
} 