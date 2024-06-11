import Image from "next/image";
interface Props {
    iconUrl: string;
    number: number;
    desc: string;
}

export default function Step({ iconUrl, number, desc }: Props) {
    return (
        <div>
            <Image src={iconUrl} alt={iconUrl} width={50} height={50} />
            <span>{number}</span>
            <p>
                {desc}
            </p>
        </div>
    )
}

