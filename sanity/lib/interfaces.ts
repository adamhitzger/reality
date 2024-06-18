import { Image } from "sanity";

type Heating = "Ústřední topení" | "Tuhá paliva" | "Vlastní";
type Water = "Dálkový odvod" | "Studna" | "Vlastní";
type Condition = "Velmi pěkný" | "Pěkný" | "Špatný" | "Velmi špatný";
type Material = "Cihlová" | "Dřevostavba";
type Owner = "Vlastní" | "Družstvo";
type Gargae = "Ano" | "Ne";
type Parking = "Venkovní" | "Vnitřní" | "Žádné";
type Equipment = "Kompletní" | "Částečné" | "Žádné";
type Type = "Byt" |"Rodinný dům";
type Realtor = "Lukáš Hrdina" | "Michal Pros" | "Petra Prosová";
type Status =  "Na prodej" | "K pronájmu" | "Prodáno" | "Storno";
type Accordition = {
    heading: string;
    text: string;
  };

export type Section = TextWithImageSection | HeadingSection | StepsSection | ButtonSection | AccorditionsSection;

export interface TextWithImageSection {
    _type: "textWithImage" | undefined;
    textWithImageUrl: string;
    heading: string | undefined;
    text: any;
    button: {
        url: string;
        text: string;
    };
    position: string;
    image_pos: string;
    heading_cap: string | undefined;
    isDynamic: boolean;
  };

interface HeadingSection {
    _type: "heading";
    text: string;
  };
  
interface StepsSection {
    _type: "steps";
    steps: Steps[];
  };
  
export interface Steps {
    iconUrl: string;
    number: number;
    desc: string;
  };
  
interface ButtonSection {
    _type: "button";
    text: string;
    url: string;
  };
  
interface AccorditionsSection {
    _type: "accorditions";
    accorditions: Accordition[];
  };

export interface Book {
    front: string;
    back: string;
};

export interface Staff {
    name: string;
    position: string;
    url: string;
    description: string[];
    staffUrl: string;
};

export interface RealityCard {
    name: string
    slug: {
        current: string;
    };
    street: string;
    street_number: string;
    city: string;
    postcode: string;
    imageUrl: string;
    status: string;
    price: number;
};

export interface Reality {
    name: string; 
    slug: {
        current: string;
    };
    street: string;
    street_number: string;
    city: string;
    postcode: string;
    details: any;
    imageUrl: string;
    galleryUrls: string[];
    planUrl: string; 
    price: number;
    area: number;
    geopoint: {
        _type: string;
        lng: number;
        lat: number;
        alt: number;
    };
    status: Status;
    realtor: Realtor;
    type: Type;
    material: Material;
    equipment: Equipment;
    garage: Gargae;
    parking: Parking;
    owner: Owner;
    condition: Condition;
    water: Water;
    heating: Heating;
};

export interface Pages {
    name: string;
    slug: {
        current: string;
    };
    heading: string;
    pageImageUrl: string;
};

export interface MyPage {
    name: string;
    slug: {
        current: string;
    };
    heading: string;
    pageImageUrl: string;
    sections: Section[];
};