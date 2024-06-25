import { Reality } from "@/sanity/lib/interfaces";
import { PortableText, SanityDocument } from "next-sanity";
import Image from "next/image";
import Footer from "@/components/Footer";

// ProfileCard
/* function ProfileCard({ realtor }) {
    if (!realtor) return null;

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
            {realtor.image && (
                <Image
                    src={realtor.image}
                    alt="Realtor Image"
                    width={100}
                    height={100}
                    className="rounded-full mx-auto"
                />
            )}
            <div className="text-center mt-4">
                <h2 className="text-xl font-semibold">{realtor.name}</h2>
                <p className="text-gray-600">{realtor.email}</p>
                <p className="text-gray-600">{realtor.phone}</p>
                <p className="text-gray-600">{realtor.company}</p>
            </div>
        </div>
    );
} */

export default function RealityComponent({ reality }: { reality: Reality }) {
    return (
        <main className="mx-auto p-4 max-w-7xl">
            <section className="my-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {reality.imageUrl && (
                        <div className="md:col-span-2 lg:col-span-3">
                            <Image
                                src={reality.imageUrl}
                                alt="Main Image"
                                width={400}
                                height={400}
                                className="rounded-lg shadow-lg w-full h-auto object-cover"
                            />
                        </div>
                    )}
                    {reality.galleryUrls && reality.galleryUrls.map((gallery, idx) => (
                        <div key={idx} className="md:col-span-1">
                            <Image
                                src={gallery}
                                alt={`Gallery Image ${idx + 1}`}
                                width={200}
                                height={200}
                                className="rounded-lg shadow-lg w-full h-auto object-cover"
                            />
                        </div>
                    ))}
                </div>
            </section>
            <section className="flex flex-col items-start space-y-2 mb-6">
                {reality.name && <h1 className="text-3xl font-bold text-gray-800">{reality.name}</h1>}
                {reality.street && <span className="text-lg text-gray-600">{reality.street}</span>}
                {reality.street_number && <span className="text-lg text-gray-600">{reality.street_number}</span>}
                {reality.city && <span className="text-lg text-gray-600">{reality.city}</span>}
                {reality.postcode && <span className="text-lg text-gray-600">{reality.postcode}</span>}
                {reality.details && <div className="prose"><PortableText value={reality.details} /></div>}
                <br />
            </section>

            {reality.price && <span className="text-xl font-semibold text-gray-800">{reality.price}</span>}
            <br />

            {reality.planUrl && (
                <Image
                    src={reality.planUrl}
                    alt={reality.planUrl}
                    width={200}
                    height={200}
                    className="rounded-lg shadow-lg"
                />
            )}
            <br />
            {/* {reality.realtor realtor={reality.realtor} />} */}
            <br />
            {reality.status && <span className="text-lg font-medium text-gray-700">{reality.status}</span>}
            <br /><br />
            <div className="flex justify-center">
                <div className="flex flex-wrap space-x-8">
                    <div className="space-y-2 mr-60">
                        {reality.area && (
                            <>
                                <p><strong>Užitná plocha:</strong> {reality.area}</p>
                                <hr />
                            </>
                        )}
                        {reality.type && (
                            <>
                                <p><strong>Druh stavby:</strong> {reality.type}</p>
                                <hr />
                            </>
                        )}
                        {reality.material && (
                            <>
                                <p><strong>Typ stavby:</strong> {reality.material}</p>
                                <hr />
                            </>
                        )}
                        {reality.equipment && (
                            <>
                                <p><strong>Vybavení:</strong> {reality.equipment}</p>
                                <hr />
                            </>
                        )}
                        {reality.garage && (
                            <>
                                <p><strong>Garáž:</strong> {reality.garage}</p>
                                <hr />
                            </>
                        )}
                    </div>
                    <div className="space-y-2">
                        {reality.parking && <p><strong>Parkování:</strong> {reality.parking}</p>}
                        {reality.owner && <p><strong>Vlastnictví:</strong> {reality.owner}</p>}
                        {reality.condition && <p><strong>Stav objektu:</strong> {reality.condition}</p>}
                        {reality.water && <p><strong>Voda:</strong> {reality.water}</p>}
                        {reality.heating && <p><strong>Topení:</strong> {reality.heating}</p>}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
