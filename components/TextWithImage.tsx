import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { PortableText } from "next-sanity";

type Position = "Text vlevo" | "Obrázek vlevo";
type Image_Pos = "1/2 sekce" | "1/4 sekce" | "1/6 sekce";
type Heading_Cap = "Uppercase" | "Lowercase";

interface Props {
    heading: string;
    text: any;
    image: string;
    button: any;
    position: Position;
    image_pos: Image_Pos;
    heading_cap: Heading_Cap;
}

export default function TextWithImage({ heading, text, image, button, position, image_pos, heading_cap }: Props) {
    return (
        <section
            className={`flex flex-col md:flex-row h-screen ${position === "Obrázek vlevo" ? "md:flex-row-reverse" : "md:flex-row"} mb-8 bg-gray-100`}>
            <div className="w-full md:w-1/2 p-40 flex flex-col justify-center">
                {heading && (
                    <h2 className={`text-2xl font-bold text-center ${heading_cap === "Uppercase" ? "uppercase" : "lowercase"} mb-4`}>
                        {heading}
                    </h2>
                )}
                <div className="text-gray-700 mb-4 mt-4 ml-32 w-96">
                    <PortableText value={text} />
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
            <div className={`w-full md: ${image_pos === "1/2 sekce" ? "w-1/2" : image_pos === "1/4 sekce" ? "w-1/3 h-1/2 " : "w-1/6"} flex justify-center items-center border`}>
                <div className="relative w-full h-full py-40 lg:py-0">
                    <Image src={image} alt={heading} fill={true} className="object-cover" />
                </div>
            </div>
        </section>
    );
}
