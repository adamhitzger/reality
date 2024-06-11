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
        <main>
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
                    <Link key={id} href={s.url}>
                        <Button>{s.text}</Button>
                    </Link>
                ) || s._type === "steps" && (
                    <div key={id} className="grid grid-cols-3">
                        {s.steps.map((step: any, id: number) =>
                            <Step key={id} iconUrl={step.iconUrl} number={step.number} desc={step.desc} />
                        )}
                    </div>
                ) || s._type === "accorditions" && (
                    <Accordion key={id} type="single" collapsible className="grid grid-rows-1">
                        {s.accorditions.map((accordion: any, id: number) => (
                            <AccordionItem key={id} value={`item-${id}`}>
                                <AccordionTrigger>{accordion.heading}</AccordionTrigger>
                                <AccordionContent>{accordion.text}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                )))}
        </main>
    )
} 