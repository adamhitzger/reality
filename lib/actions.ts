"use server";

import { sanityFetch } from "@/sanity/lib/fetch";
import { RealityCard } from "@/sanity/lib/interfaces";
import { groq } from "next-sanity";
import {createTransport } from "nodemailer"
export default async function getNemovitosti(params: string, start: number, end: number){
    let filter: string = "";
    
    switch(params) {
       case "kpronajmu":
        filter = "K pronájmu";
        break;
        case "naprodej":
        filter = "Na prodej";
        break;
        case "prodano":
        filter = "Prodáno";
        break;
        default:
            break;
    }

    const FILTERED_REALITIES_QUERY = groq`*[_type == 'reality' && status == '${filter}'] | order(_createdAt asc)[${start}..${end}] {
        name,
        'slug': slug.current,
        overview,
        price,
        "imageUrl": image.asset->url
      }`;

      const COUNT_ALL_REALITIES = groq`count(*[_type == 'reality' && status == '${filter}'])`;

    try {
        const result = await sanityFetch<RealityCard[]>({query: FILTERED_REALITIES_QUERY});
        const count = await sanityFetch<RealityCard[]>({query: COUNT_ALL_REALITIES});
        
        return { result, count };
    }catch(error){
        console.error(error);
        throw error;
    }
}


export async function newsletter(formData: FormData, subject: string) {
  let jmeno: string = "";
    let phone: string = "";
    let email: string = "";
    let prijmeni: string = "";
    let msg: string = "";

    
    jmeno = formData.get("jmeno") as string;
    phone = formData.get("tel") as string;
    email = formData.get("email") as string;
    prijmeni = formData.get("prijmeni") as string;
    msg = formData.get("msg") as string;

    const transporter = createTransport({
     service: "gmail",
     auth: {
      user: process.env.FROM_EMAIL,
      pass: process.env.FROM_EMAIL_PASSWORD,
     }
    });
  
    const mailOptions = {
      from: process.env.FROM_EMAIL,
      to: "lukas.hrdina@hrdinareality.cz",
      subject: subject,
      text:  `${jmeno}, ${phone}, ${email}, ${prijmeni}, ${msg}` ,
    };

    try{
    await  transporter.sendMail(mailOptions);  
    
    }catch(error){
      console.log(error);
    }
  }