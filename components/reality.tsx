
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
// ProfileCard
/* function ProfileCard({ realtor }) {
    if (!realtor) return null;

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
            {realtor.image && (
                <Image
                    src={realtor.image}
                    alt="Realtor Image"
                    width={100}
                    height={100}
                    className="rounded-full mx-auto"
                />
            )}
            <div className="text-center mt-4">
                <h2 className="text-xl font-semibold">{realtor.name}</h2>
                <p className="text-gray-600">{realtor.email}</p>
                <p className="text-gray-600">{realtor.phone}</p>
                <p className="text-gray-600">{realtor.company}</p>
            </div>
        </div>
    );
} */

export default function RealityComponent({ reality }: { reality: Reality }) {

    const gallery = reality.galleryUrls.slice(0, 12);
    const gallery2 = reality.galleryUrls.slice(13);
    return (
        <main className="flex flex-col py-10 px-5 md:px-20 w-full min-h-screen z-0">
            <section className="flex flex-col items-start space-y-2 my-8 mx-auto w-full ">
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
            <section className=" flex flex-wrap md:flex-nowrap my-5 h-1/2">
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
                <div className="  grid grid-cols-2 grid-rows-6 md:grid-cols-4 md:grid-rows-3 py-5 md:px-5 md:py-0 w-full md:w-1/2 gap-2">
                    {gallery && gallery.map((gallery, idx: number) => (
                        <div key={idx}
                            className="relative w-full "

                        >
                            <Image
                                src={gallery}
                                alt={`Gallery Image ${idx + 1}`}
                                width={200}
                                height={200}
                                className="rounded-lg shadow-lg w-full h-auto md:h-32 object-cover"
                            />
                        </div>
                    ))}
                </div>
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
            <section className="w-full pb-10  gap-4 grid grid-cols-2 grid-rows-2 md:grid-rows-1 md:grid-cols-4">
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
                    <div className="w-full rounded-[25px]">
                        <MyMap latitude={reality.geopoint.lat} longitude={reality.geopoint.lng} />
                    </div>

                )}
            </section>

            <FormComponent heading="Máte zájem? Neváhejte nás kontakovat" text={reality.details} />


            <section className="flex flex-wrap md:flex-nowrap my-5 md:min-h-screen text-xl  md:space-x-20">
                <div className=" w-full md:w-1/2 grid grid-cols-1 divide-y justify-items-start py-10 gap-y-10 border-y">
                    {reality.price && <div className="space-x-2 w-full flex "><strong>Cena: </strong><span>{reality.price}</span></div>}
                    {reality.type && <div className="space-x-2 w-full flex pt-10"><strong>Druh stavby: </strong><span> {reality.type}</span></div>}
                    {reality.equipment && <div className="space-x-2 w-full flex pt-10"><strong>Vybavení:</strong> <span>{reality.equipment}</span></div>}
                    {reality.garage && <div className="space-x-2 w-full flex pt-10"><strong>Garáž:</strong> <span>{reality.garage}</span></div>}
                    {reality.parking && <div className="space-x-2 w-full flex pt-10"><strong>Parkování:</strong><span> {reality.parking}</span></div>}
                    {reality.owner && <div className="space-x-2 w-full flex pt-10"><strong>Vlastnictví:</strong> <span>{reality.owner}</span></div>}

                </div>
                <div className="divide-y border-y w-full md:w-1/2 grid grid-cols-1 justify-items-start py-10 gap-y-10">
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
