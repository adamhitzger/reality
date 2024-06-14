import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { PortableText, PortableTextComponent, PortableTextReactComponents, PortableTextComponentProps, PortableTextBlock } from "next-sanity";
import { TextWithImageProps } from "@/types";


export default function TextWithImage({ heading, text, image, button, position, image_pos, heading_cap, isDynamic }: TextWithImageProps) {

    return (
        <section
            className={`flex flex-wrap md:flex-nowrap h-screen ${position === "Obrázek vlevo" ? "md:flex-row-reverse" : "md:flex-row"} mb-8 bg-gray-100`}>
            <div className="w-full md:w-1/2 flex flex-col px-20">
                {heading && (
                    <h2 className={`text-2xl font-bold text-center ${heading_cap === "Uppercase" ? "uppercase" : "lowercase"} pt-24`}>
                        {heading}
                    </h2>
                )}
                <div className={`text-gray-700 ${heading ? "pt-5" : "pt-20"} `}>
                    {isDynamic ? <PortableText
                        value={text}
                    /> : <p>{text}</p>}

                </div>
                {button && (
                    <div className="flex justify-center mt-4">
                        <Link href={button.url}>
                            <Button
                                className="bg-transparent hover:bg-[#897953] hover:text-white text-black px-4 border border-gray-800 h-20 overflow-ellipsis overflow-hidden"
                            >
                                {button.text}
                            </Button>
                        </Link>
                    </div>
                )}
            </div>
            <div className={`w-1/2 flex justify-center`}>
                <div className={`relative h-full ${image_pos === "1/2 sekce" ? "w-full" : (image_pos === "1/4 sekce" ? "w-5/6" : "w-2/3")}`}>
                    <Image src={image} alt={image} fill={true} className="object-cover" />
                </div>
            </div>
        </section>
    );
}
