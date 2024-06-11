import { SanityDocument } from "next-sanity"
import Image from "next/image"


export default function RealityComponent({ reality }: { reality: SanityDocument }) {
    const {
        name,
        street,
        street_number,
        city,
        postcode,
        details,
        imageUrl,
        galleryUrls,
        price,
        geopoint,
        status,
        realtor,
        type,
        equipment,
        garage,
        parking,
        owner,
        condition,
        water,
        heating
    } = reality;
    console.log(reality);

    return (
        <main className="mx-auto">
            {price ? (<h1>{price}</h1>) : null}
            {imageUrl ? (<Image src={imageUrl} alt="img" width={200} height={200} />) : null}
            {galleryUrls ? (
                galleryUrls.map((gallery: string, idx: number) => (
                    <Image key={idx} src={gallery} alt="img" width={200} height={200} />
                ))
            ) : null}
        </main>
    )
}
