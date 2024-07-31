import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { PortableText } from "next-sanity";
import { TextWithImageSection } from "@/sanity/lib/interfaces";

export default function TextWithImage({ heading, text, textWithImageUrl, button, position, image_pos, heading_cap, isDynamic, _type = "textWithImage" }: TextWithImageSection) {

    return (
        <section
            className={` flex flex-wrap md:flex-nowrap px-10 py-20 md:min-h-fit  ${position === "Obrázek vlevo" ? "md:flex-row-reverse" : "md:flex-row"} `}>
            <div className="w-full md:w-1/2 flex flex-col  px-5  font-light">
                <div className="flex flex-col w-full m-auto px-10">
                    {heading && (
                        <h2 className={`text-2xl  text-center ${heading_cap === "Uppercase" ? "uppercase" : "normal-case"}`}>
                            {heading}
                        </h2>
                    )}
                    <div className={`text-gray-700 ${heading ? "pt-5" : null} text-justify md:text-center text-lg`}>
                        {isDynamic ? <PortableText
                            value={text}
                        /> : <p>{text}</p>}

                    </div>
                    {button && (
                        <div className="flex justify-center mx-auto mt-4 w-full px-2 md:w-1/2">
                            <Link href={button.url}>
                                <Button size={"lg"}
                                >
                                    {button.text}
                                </Button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
            <div className={`w-full py-10 md:py-0 h-auto md:w-1/2 flex justify-center items-center`}>
                <div className={`relative h-96 md:min-h-screen ${image_pos === "1/2 sekce" ? "w-full" : (image_pos === "1/4 sekce" ? "w-5/6" : "w-2/3")}`}>
                    {textWithImageUrl ? <Image src={textWithImageUrl} alt={textWithImageUrl} fill={true} className="object-contain bg-contain" /> : null}
                </div>
            </div>
        </section>
    );
}
