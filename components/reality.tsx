import { Reality } from "@/sanity/lib/interfaces";
import { PortableText, SanityDocument } from "next-sanity"
import Image from "next/image"

export default function RealityComponent({ reality }: { reality: Reality }) {


    return (
        <main className="mx-auto">
            {reality.name ? (<h1>{reality.name}</h1>) : null}<br />
            {reality.street ? (<span>{reality.street}</span>) : null}<br />
            {reality.street_number ? (<span>{reality.street_number}</span>) : null}<br />
            {reality.city ? (<span>{reality.city}</span>) : null}<br />
            {reality.postcode ? (<span>{reality.postcode}</span>) : null}<br />
            {reality.details ? (<PortableText value={reality.details} />) : null}<br />
            {reality.price ? (<span>{reality.price}</span>) : null}<br />
            {reality.imageUrl ? (<Image src={reality.imageUrl} alt="img" width={200} height={200} />) : null}<br />
            {reality.galleryUrls ? (
                reality.galleryUrls.map((gallery: string, idx: number) => (
                    <Image key={idx} src={gallery} alt="img" width={200} height={200} />
                ))
            ) : null}<br />
            {reality.planUrl ? (<Image src={reality.planUrl} alt={reality.planUrl} width={200} height={200} />) : null}<br />
            {reality.area ? (<span>{reality.area}</span>) : null}<br />
            {reality.status ? (<span>{reality.status}</span>) : null}<br />
            {reality.realtor ? (<span>{reality.realtor}</span>) : null}<br />
            {reality.type ? (<span>{reality.type}</span>) : null}<br />
            {reality.material ? (<span>{reality.material}</span>) : null}<br />
            {reality.equipment ? (<span>{reality.equipment}</span>) : null}<br />
            {reality.garage ? (<span>{reality.garage}</span>) : null}<br />
            {reality.parking ? (<span>{reality.parking}</span>) : null}<br />
            {reality.owner ? (<span>{reality.owner}</span>) : null}<br />
            {reality.condition ? (<span>{reality.condition}</span>) : null}<br />
            {reality.water ? (<span>{reality.postcode}</span>) : null}<br />
            {reality.heating ? (<span>{reality.heating}</span>) : null}<br />
        </main>
    )
}
