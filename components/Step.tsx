import { Steps } from "@/sanity/lib/interfaces";
import Image from "next/image";

export default function Step({ iconUrl, number, desc }: Steps) {
    return (
        <div className="flex flex-col items-center justify-center -ml-16">
            <Image className="mt-4" src={iconUrl} alt={iconUrl} width={50} height={50} />
            <span className="text-center">{number}</span>
            <p className="text-center mb-8 max-w-xs">
                {desc}
            </p>
        </div>
    )
}

