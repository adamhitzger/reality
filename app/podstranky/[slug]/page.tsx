import { SanityDocument } from "next-sanity";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PAGE_QUERY } from "@/sanity/lib/queries"
import { sanityFetch } from "@/sanity/lib/fetch"
import TextWithImage from "@/components/TextWithImage";
import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Step from "@/components/Step";

export default async function Page({ params }: { params: { slug: string } }) {
    const page = await sanityFetch<SanityDocument>({ query: PAGE_QUERY, params });

    console.log(page);
    if (!page) {
        return notFound()
    }

    return (
        <main className=" mx-auto">
            {page.sections?.map((s: any, id: number) => (
                s._type === "textWithImage" && (
                    <TextWithImage
                        key={id}
                        heading={s.heading}
                        text={s.text}
                        image={s.textWithImageUrl}
                        button={s.button}
                        position={s.position}
                        image_pos={s.image_pos}
                        heading_cap={s.heading_cap}
                    />
                ) || s._type === "heading" && (
                    <Heading key={id} text={s.text} />
                ) || s._type == "button" && (
                    <div className="w-full flex justify-center items-center p-5">
                        <Link key={id} href={s.url}>
                            <Button className="bg-transparent hover:bg-[#897953] hover:text-white text-black px-4 border border-gray-800  overflow-ellipsis overflow-hidden py-7">
                                {s.text}
                            </Button>
                        </Link>
                    </div>
                ) || s._type === "steps" && (
                    <div key={id} className="grid grid-cols-3">
                        {s.steps.map((step: any, id: number) =>
                            <Step key={id} iconUrl={step.iconUrl} number={step.number} desc={step.desc} />
                        )}
                    </div>
                ) || s._type === "accorditions" && (
                    <div key={id} className="flex justify-center items-center">
                        <Accordion key={id} type="single" collapsible className="grid grid-rows-1  w-1/2 space-y-4 shadow-lg">
                            {s.accorditions.map((accordion: any, id: number) => (
                                <AccordionItem key={id} value={`item-${id}`} className=" bg-white-500 px-10">
                                    <AccordionTrigger className="text-2xl">{accordion.heading}</AccordionTrigger>
                                    <AccordionContent className="text-base">{accordion.text}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                )))}
        </main>
    )
} 