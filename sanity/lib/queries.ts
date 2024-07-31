import "server-only";

import { groq } from "next-sanity";

export const BOOK_QUERY = groq`*[_type == 'book'] | order(_createdAt desc) {
  "frontUrl": front.asset->url,
  "backUrl": back.asset->url
}`;
export const STAFF_QUERY = groq`*[_type == 'staff'] | order(poradi asc) {
  name,
  position,
  url,
  description,
  "staffUrl": image.asset->url,
}`;

export const REALITIES_QUERY = groq`*[_type == 'reality' && status == 'Na prodej'][0...5] | order(_createdAt desc) {
    name,
    'slug': slug.current,
    overview,
    price,
    "imageUrl": image.asset->url
  }`;

  export const MAIN_SECTIONS = groq`*[_type == 'main'] | order(poradi asc){
    textWithImage{
        "textWithImageUrl": image.asset->url,
        heading,
        text,
        button,
        position,
        image_pos,
        heading_cap,
    }
  }`

  export const REALITY_QUERY = groq`*[_type == 'reality' && slug.current == $slug][0]{
    name,   
   "slug": slug.current,
   street,
   street_number,
   city,
   sections[]{
      _type == "textWithImage" => {
        _type,
        "textWithImageUrl": image.asset->url,
        heading,
        text,
        button,
        position,
        image_pos,
        heading_cap,
      }
      },
   postcode,
   details,
   "imageUrl": image.asset->url,
   "galleryUrls": gallery[].asset->url,
   "planUrl": floor_plan.asset->url,
   "houseUrl": house_plan.asset->url,
   price,
   area,
   geopoint,
   status,
   realtor,
   material,
   type,
   equipment,
   garage,
   parking,
   owner,
   condition,
   water,
   heating
   }`;

   export const PAGES_QUERY = groq`*[_type == "page"]{
    name,
    "slug": slug.current,
    heading,
    "pageImageUrl": image.asset->url,
   }`;

   export const PAGE_QUERY = groq`*[_type == "page" && slug.current == $slug][0]{
    name,
    "slug": slug.current,
    heading,
    "pageImageUrl": image.asset->url,
    sections[]{
      _type == "textWithImage" => {
        _type,
        "textWithImageUrl": image.asset->url,
        heading,
        text,
        button,
        position,
        image_pos,
        heading_cap,
      },
      _type == "heading" => {
        _type,
        text
      },
      _type == "steps" => {
        _type,
        steps[]{
          "iconUrl": icon.asset->url,
          number,
          desc
        }
      },
      _type == "button" => {
        _type,
        text,
        url
      },
      _type == "accorditions" => {
        _type,
        accorditions[]{
          heading,
          text
        }
        },
        _type == "form" => {
        _type,
        text,
        heading
      },
      }
    }`;