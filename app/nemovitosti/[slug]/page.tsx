import { notFound } from "next/navigation"
import { REALITY_QUERY } from "@/sanity/lib/queries"
import { sanityFetch } from "@/sanity/lib/fetch"
import RealityComponent from "@/components/reality";
import { Reality } from "@/sanity/lib/interfaces";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata({params, parent}:{params: { slug: string}, parent: ResolvingMetadata}):Promise<Metadata>{
    let r = await sanityFetch<Reality>({ query: REALITY_QUERY, params });
    
    return{
        icons: {
            icon: "/logo.jpg"
          },
        title: r.name,
        description: r.overview,
        applicationName: "Hrdina Reality",
        authors: [{name: "Lukáš Hrdina", url: "https://lukashrdina.cz"}, {name: "Jana Hrdinová"}],
        generator: "Next.js",
        keywords: [r.name, `${r.street} ${r.street_number} ${r.city} ${r.postcode}`, r.overview, "Hrdina Reality", "Havlíčkův Brod", "Realitní služby", "makléř Havlíčkův Brod",
  "realitní makléř Havlíčkův Brod",
  "prodej nemovitostí Havlíčkův Brod",
  "koupě nemovitostí Havlíčkův Brod",
  "pronájem Havlíčkův Brod",
  "nemovitosti Havlíčkův Brod",
  "realitní služby Havlíčkův Brod",
  "osobní přístup realitní makléř",
  "profesionální makléř Havlíčkův Brod",
  "realitní poradenství Havlíčkův Brod"],
        creator: "Adam Hitzger",
        publisher: "Adam Hitzger",
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
          },
        openGraph: {
            title: r.name,
            description: r.overview,
            url:`https://hrdinareality.cz/nemovitosti/${r.slug}`,
            siteName: "Hrdina Reality",
            images: [
                {
                    url: r.galleryUrls[0],
                    width: 800,
                    height: 600,
                },
                {
                    url: r.galleryUrls[1],
                    width: 800,
                    height: 600,
                },
                {
                    url: r.galleryUrls[2],
                    width: 800,
                    height: 600,
                },
                {
                    url: r.galleryUrls[3],
                    width: 800,
                    height: 600,
                },
            ],
            locale: "cs_CZ",
            type: "website"
        }
    }
}

export default async function Page({ params }: { params: { slug: string } }) {
    const reality = await sanityFetch<Reality>({ query: REALITY_QUERY, params });

    console.log(reality);
    if (!reality) {
        return notFound()
    }
    return (
        <RealityComponent reality={reality} />
    )
} 