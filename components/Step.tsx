import Image from "next/image";
interface Props {
    iconUrl: string;
    number: number;
    desc: string;
}

export default function Step({ iconUrl, number, desc }: Props) {
    return (
        <div className="flex flex-col items-center justify-center -ml-16">
            <Image className="mt-4" src={iconUrl} alt={iconUrl} width={50} height={50} />
            <span className="text-center">{number}</span>
            <p className="text-center mb-8">
                {desc}
            </p>
        </div>
    )
}

