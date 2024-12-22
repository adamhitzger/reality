import { sanityFetch } from "@/sanity/lib/fetch";
import { Pages, RealityCard } from "@/sanity/lib/interfaces";
import { PAGES_QUERY, REALITIES_QUERY } from "@/sanity/lib/queries";
import { MetadataRoute } from "next";

type Route = {
    url: string;
    lastModified: string;
  };
export const dynamic = "force-dynamic"
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl: string = "https://hrdinareality.cz";
    const staticPages: Route[] = [
        "/",
        "/nas-tym",
        "/book",
        "/studio", 
        "/nemovitosti",
        "/kontakt"
      ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString()
      }));
    const pagesPromise: Route[] = await sanityFetch<Pages[]>({query: PAGES_QUERY}).then((pages) =>
        pages.map((p: Pages) => ({
            url: `${baseUrl}/podstranky/${p.slug}`,
            lastModified: new Date().toISOString()
        }))
    );
    
    const realitiesPromise: Route[] = await sanityFetch<RealityCard[]>({query: REALITIES_QUERY}).then((realities) =>
        realities.map((r: RealityCard) => ({
            url: `${baseUrl}/nemovitosti/${r.slug}`,
            lastModified: new Date().toISOString()
        }))
    );
    let fetchedRoutes: Route[] = [];
    try{
        fetchedRoutes = (await Promise.all([pagesPromise, realitiesPromise])).flat();

    }catch(error){
        throw JSON.stringify(error)
    } 
    return [...staticPages, ...fetchedRoutes];
}