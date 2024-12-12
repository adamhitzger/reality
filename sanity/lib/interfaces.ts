import { Vector3 } from "@react-three/fiber";
import { MutableRefObject } from "react";

type Heating = "Ústřední topení" | "Tuhá paliva" | "Vlastní";
type Water = "Dálkový odvod" | "Studna" | "Vlastní";
type Condition = "Velmi pěkný" | "Pěkný" | "Špatný" | "Velmi špatný";
type Material = "Cihlová" | "Dřevostavba";
type Owner = "Vlastní" | "Družstvo";
type Gargae = "Ano" | "Ne";
type Parking = "Venkovní" | "Vnitřní" | "Žádné";
type Equipment = "Kompletní" | "Částečné" | "Žádné";
type Type = "Byt" |"Rodinný dům" | "Chata" | "Chalupa" | "Pozemek";
type Realtor = "Lukáš Hrdina" | "Michal Pros" | "Petra Prosová";
type Status =  "Na prodej" | "K pronájmu" | "Prodáno" | "Storno";
type Accordition = {
    heading: string;
    text: string;
  };

  export interface SearchParamsProps {
    searchParams: { [key: string]: string | undefined};
  }

export type Section = TextWithImageSection | HeadingSection | StepsSection | ButtonSection | AccorditionsSection | Form;

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

  export interface Form {
    _type: "form";
    heading: string;
    text: string;
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

export interface BookInter {
    frontUrl: string;
    backUrl: string;
};

export interface BookPos extends BookInter {
    id: number,
    position: Vector3 | undefined;
    element?:  Element;
    

}

export interface MySceneProps {
    children: React.ReactNode;
    pages: number;
}

export interface Staff {
    name: string;
    position: string;
    url: string;
    description: string[];
    staffUrl: string;
};

export interface SectionsOnMainPage {
  poradi: number;
  textWithImage: TextWithImageSection;
}

export interface RealityCard {
    name: string
    slug: {
        current: string;
    };
    overview: string;
    imageUrl: string;
    price: number;
};

export interface Reality {
    name: string; 
    slug: {
        current: string;
    };
    overview: string;
    street: string;
    street_number: string;
    city: string;
    postcode: string;
    details: any;
    sections: TextWithImageSection[];
    imageUrl: string;
    galleryUrls: string[];
    planUrl: string; 
    houseUrl: string
    price: string;
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
    color: "Černá" | "Bílá",
    overview: string,
    heading: string;
    pageImageUrl: string;
    sections: Section[];
};

