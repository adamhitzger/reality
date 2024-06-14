import { PortableTextBlock } from "next-sanity";
import { TypedObject } from "sanity";

type Position = "Text vlevo" | "Obrázek vlevo";
type Image_Pos = "1/2 sekce" | "1/4 sekce" | "1/6 sekce";
type Heading_Cap = "Uppercase" | "Lowercase";
type TextStyles = 'normal' | 'h1' | 'myCustomStyle'
export interface TextWithImageProps {
    heading?: string;
    text: any;
    image: string;
    button?: any;
    position: Position;
    image_pos: Image_Pos;
    heading_cap?: Heading_Cap;
    isDynamic: boolean;
}
