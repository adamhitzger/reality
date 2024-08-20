
import { Reality, TextWithImageSection } from "@/sanity/lib/interfaces";
import { PortableText, SanityDocument } from "next-sanity";
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';
import TextWithImage from "./TextWithImage";
import { useState } from "react";
import { plugin } from "postcss";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Photos from "./photos";
import { form } from "sanity/structure";
import { Button } from "./ui/button";
import FormComponent from "@/components/formComp";
import MyMap from "./MyMap";
import Gallery from "./Gallery";


export default function RealityComponent({ reality }: { reality: Reality }) {

    const gallery = reality.galleryUrls.slice(0, 12);
    const gallery2 = reality.galleryUrls.slice(13);
    return (
        <main className="flex flex-col py-10  w-full min-h-screen z-0">
            <section className="flex flex-col items-start space-y-2 my-8 mx-auto w-full px-5 md:px-20">
                {reality.name && <h1 className="text-5xl mx-auto font-semibold text-gray-800">{reality.name}</h1>}
                <div className="flex flex-row space-x-2 mx-auto">
                    {reality.street && <span className="text-lg text-gray-600">{reality.street},</span>}
                    {reality.street_number && <span className="text-lg text-gray-600">{reality.street_number},</span>}
                </div>
                <div className="flex flex-row space-x-2 mx-auto">
                    {reality.city && <span className="text-lg text-gray-600">{reality.city},</span>}
                    {reality.postcode && <span className="text-lg text-gray-600">{reality.postcode}</span>}
                </div>
            </section>
            <section className=" flex flex-wrap md:flex-nowrap my-5 h-1/2 px-5 md:px-20">
                <div className="  relative  w-full md:w-1/2" >
                    {reality.imageUrl && (
                        <Image
                            src={reality.imageUrl}
                            alt="Main Image"
                            width={400}
                            height={400}
                            className="w-full object-cover bg-cover rounded-lg"
                        />
                    )}
                </div>
                <Gallery gallery={gallery} />
            </section>
            <Photos gallery={gallery2} />

            {reality.sections?.map((s: TextWithImageSection, id: number) => (
                s._type === "textWithImage" && (
                    <TextWithImage
                        key={id}
                        _type="textWithImage"
                        heading={s.heading}
                        text={s.text}
                        textWithImageUrl={s.textWithImageUrl}
                        button={s.button}
                        position={s.position}
                        image_pos={s.image_pos}
                        heading_cap={s.heading_cap}
                        isDynamic={true}
                    />
                )))}
            <section className="w-full py-10  gap-4 grid grid-cols-1 grid-rows-3 md:grid-rows-1 md:grid-cols-3 px-5 md:px-20">
                {/**uzemní plán, plán domu, katastr, mapa */}
                {reality.planUrl && (
                    <div className="relative w-full">
                        <Image
                            src={reality.planUrl}
                            alt={reality.planUrl}
                            width={200}
                            height={200}
                            className=" shadow-lg bg-cover w-full"
                        />
                    </div>
                )}
                {reality.houseUrl && (
                    <div className="relative w-full">
                        <Image
                            src={reality.houseUrl}
                            alt={reality.houseUrl}
                            width={200}
                            height={200}
                            className=" shadow-lg bg-cover w-full"
                        />
                    </div>
                )}
                {reality.geopoint && (
                    <div className="w-full h-auto rounded-[25px]">
                        <MyMap latitude={reality.geopoint.lat} longitude={reality.geopoint.lng} />
                    </div>

                )}
            </section>
            <section className="flex p-10 md:p-20 text-justify md:text-center text-xl font-light ">
                <p>Veškeré zveřejněné údaje obsažené v tomto inzerátu mají pouze informativní charakter a nejsou nabídkou ve smyslu § 1731 nebo § 1732 občanského zákoníku, ani se nejedná o veřejný příslib dle § 1733 občanského zákoníku. Z této nabídky tak nikomu nevzniká nárok na uzavření smlouvy. Společnost Hrdina Group s.r.o zprostředkovává údaje (informace) nabyté v dobré víře od vlastníka nemovité věci a z tohoto důvodu nenese odpovědnost za jejich úplnost, správnost a přesnost. Současně není oprávněna uzavírat jménem vlastníka nemovité věci jakékoliv smlouvy spojené s prodejem nemovitosti. </p>
            </section>

            <FormComponent heading="Máte zájem? Neváhejte nás kontakovat" text={reality.details} />


            <section className="flex flex-wrap md:flex-nowrap  md:min-h-screen text-xl  md:space-x-20">
                <div className=" w-full md:w-1/2 grid grid-cols-1 divide-y justify-items-start py-10 gap-y-10 border-y px-10">
                    {reality.price && <div className="space-x-2 w-full flex "><strong>Cena: </strong><span>{reality.price}</span></div>}
                    {reality.type && <div className="space-x-2 w-full flex pt-10"><strong>Druh stavby: </strong><span> {reality.type}</span></div>}
                    {reality.equipment && <div className="space-x-2 w-full flex pt-10"><strong>Vybavení:</strong> <span>{reality.equipment}</span></div>}
                    {reality.garage && <div className="space-x-2 w-full flex pt-10"><strong>Garáž:</strong> <span>{reality.garage}</span></div>}
                    {reality.parking && <div className="space-x-2 w-full flex pt-10"><strong>Parkování:</strong><span> {reality.parking}</span></div>}
                    {reality.owner && <div className="space-x-2 w-full flex pt-10"><strong>Vlastnictví:</strong> <span>{reality.owner}</span></div>}

                </div>
                <div className="divide-y border-y w-full md:w-1/2 grid grid-cols-1 justify-items-start py-10 gap-y-10 px-10">
                    {reality.status && <div className="space-x-2 w-full flex"><strong>Status: </strong> <span>{reality.status}</span></div>}
                    {reality.area && <div className="space-x-2 w-full flex pt-10" ><strong>Užitná plocha:</strong> <span>{reality.area} m<sup>2</sup></span></div>}
                    {reality.material && <div className="space-x-2 w-full flex pt-10"><strong>Typ stavby:</strong>  <span>{reality.material}</span></div>}
                    {reality.condition && <div className="space-x-2 w-full flex pt-10"><strong>Stav objektu:</strong>  <span>{reality.condition}</span></div>}
                    {reality.water && <div className="space-x-2 w-full flex pt-10"><strong>Voda:</strong> <span> {reality.water}</span></div>}
                    {reality.heating && <div className="space-x-2 w-full flex pt-10"><strong>Topení:</strong> <span> {reality.heating}</span></div>}

                </div>
            </section>
        </main>
    );
}
