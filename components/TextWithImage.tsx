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
        <section className={`flex ${position === "Obrázek vlevo" ? "flex-row-reverse" : "flex-row"} `}>
            <div className="w-1/2">
                {heading &&
                    <h2 className={`${heading_cap === "Uppercase" ? "uppercase" : "lowercase"}`}>{heading}</h2>
                }
                <PortableText value={text} />
                {button &&
                    <Link href={button.url}>
                        <Button>{button.text}</Button>
                    </Link>
                }
            </div>
            <div className="flex w-1/2 border">
                <div className={`relative ${image_pos === "1/2 sekce" ? "w-full" : (
                    image_pos === "1/4 sekce" ? "w-1/2" : "w-2/3"
                )
                    }`}>
                    <Image src={image} alt={image} fill={true} className="object-cover" />
                </div>
            </div>
        </section >
    )
}

