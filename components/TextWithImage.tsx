import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { PortableText } from "next-sanity";
import { TextWithImageSection } from "@/sanity/lib/interfaces";
import { components } from "@/sanity/lib/components";

export default function TextWithImage({ heading, text, textWithImageUrl, button, position, image_pos, heading_cap, isDynamic, _type = "textWithImage" }: TextWithImageSection) {

    return (
        <section
            className={` flex flex-wrap lg:flex-nowrap  lg:min-h-fit  ${position === "Obrázek vlevo" ? "lg:flex-row-reverse" : "lg:flex-row"} `}>
            <div className="w-full lg:w-1/2 flex flex-col min-h-screen px-5  font-light">
                <div className="flex flex-col w-full m-auto lg:px-10">
                    {heading && (
                        <h2 className={`text-2xl  text-center ${heading_cap === "Uppercase" ? "uppercase" : "normal-case"}`}>
                            {heading}
                        </h2>
                    )}
                    <div className={`text-gray-700 ${heading ? "pt-5" : null} text-justify lg:text-center text-lg`}>
                        {isDynamic ? <PortableText
                            value={text} components={components}
                        /> : <p>{text}</p>}

                    </div>
                    {button && (
                        <div className="flex justify-center mx-auto mt-4 w-full px-2 lg:w-1/2">
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
            <div className={`w-full py-10 lg:py-0  lg:w-1/2 flex justify-center items-center h-[34rem] md:min-h-screen`}>
                <div className={`relative h-full  ${image_pos === "1/2 sekce" ? "w-full" : (image_pos === "1/4 sekce" ? "w-5/6 h-2/3" : "w-2/3 h-3/4 md:h-2/4")} `}>
                    {textWithImageUrl ? <Image src={textWithImageUrl} alt={textWithImageUrl} fill={true} className="object-cover" /> : null}
                </div>
            </div>
        </section>
    );
}
