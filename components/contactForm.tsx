import { Form } from "@/sanity/lib/interfaces";
import Image from "next/image";

export default function FormComponent({heading, text }: {heading: string, text: string}) {
    return (
        <div className="flex flex-col items-center justify-center -ml-16">
           <h1>{heading}</h1>
            <br />
            <p>{text}</p>
        </div>
    )
}

