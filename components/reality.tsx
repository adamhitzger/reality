import { Reality } from "@/sanity/lib/interfaces";
import { PortableText, SanityDocument } from "next-sanity";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function RealityComponent({ reality }: { reality: Reality }) {
    return (
        <main className="mx-auto p-4 max-w-7xl">
            <section className="flex flex-col items-start space-y-2 mb-6">
                {reality.name ? (
                    <h1 className="text-3xl font-bold text-gray-800">{reality.name}</h1>
                ) : null}
                {reality.street ? (
                    <span className="text-lg text-gray-600">{reality.street}</span>
                ) : null}
                {reality.street_number ? (
                    <span className="text-lg text-gray-600">{reality.street_number}</span>
                ) : null}
                {reality.city ? (
                    <span className="text-lg text-gray-600">{reality.city}</span>
                ) : null}
                {reality.postcode ? (
                    <span className="text-lg text-gray-600">{reality.postcode}</span>
                ) : null}
                {reality.details ? (
                    <div className="prose">
                        <PortableText value={reality.details} />
                    </div>
                ) : null} <br />
            </section>

            {reality.price ? (
                <span className="text-xl font-semibold text-gray-800">{reality.price}</span>
            ) : null}
            <br />
            <section className="my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {reality.imageUrl ? (
                    <Image
                        src={reality.imageUrl}
                        alt="img"
                        width={200}
                        height={200}
                        className="rounded-lg shadow-lg"
                    />
                ) : null}
                {reality.galleryUrls ? (
                    reality.galleryUrls.map((gallery: string, idx: number) => (
                        <Image
                            key={idx}
                            src={gallery}
                            alt="img"
                            width={200}
                            height={200}
                            className="rounded-lg shadow-lg"
                        />
                    ))
                ) : null}
            </section>
            {reality.planUrl ? (
                <Image
                    src={reality.planUrl}
                    alt={reality.planUrl}
                    width={200}
                    height={200}
                    className="rounded-lg shadow-lg"
                />
            ) : null}
            <br />
            {reality.realtor ? (
                <span className="text-lg font-medium text-gray-700">{reality.realtor}</span>
            ) : null}
            <br />
            {reality.status ? (
                <span className="text-lg font-medium text-gray-700">{reality.status}</span>
            ) : null}
            <br /> <br />
            <div className="flex justify-center">
                <div className="flex flex-wrap space-x-8">
                    <div className="space-y-2 mr-60">
                    {reality.area ? (
    <>
        <p><strong>Užitná plocha:</strong> {reality.area}</p>
        <hr />
    </>
) : null}
{reality.type ? (
    <>
        <p><strong>Druh stavby:</strong> {reality.type}</p>
        <hr />
    </>
) : null}
{reality.material ? (
    <>
        <p><strong>Typ stavby:</strong> {reality.material}</p>
        <hr />
    </>
) : null}
{reality.equipment ? (
    <>
        <p><strong>Vybavení:</strong> {reality.equipment}</p>
        <hr />
    </>
) : null}

{reality.garage ? (
    <>
        <p><strong>Garáž:</strong> {reality.garage}</p>
        <hr />
    </>
) : null}
                    </div>
                    <div className="space-y-2">
                        {reality.parking ? (
                            <p><strong>Parkování:</strong> {reality.parking}</p>
                        ) : null}
                        {reality.owner ? (
                            <p><strong>Vlastnictví:</strong> {reality.owner}</p>
                        ) : null}
                        {reality.condition ? (
                            <p><strong>Stav objektu:</strong> {reality.condition}</p>
                        ) : null}
                        {reality.water ? (
                            <p><strong>Voda:</strong> {reality.water}</p>
                        ) : null}
                        {reality.heating ? (
                            <p><strong>Topení:</strong> {reality.heating}</p>
                        ) : null}
                    </div>
                </div>
            </div>

            <Footer />
¨        </main>
    );
}
