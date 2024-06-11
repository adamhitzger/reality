import { SanityDocument } from "next-sanity";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import Image from "next/image";

export default function Realities({ realities }: { realities: SanityDocument[] }) {
    return (<div className="grid grid-cols-2 w-full gap-5">
        {realities?.length > 0 ? (
            realities.map((r, i) => (
                <Card key={i} className="w-full">
                    <CardHeader>
                        <div className="w-full relative">
                            <Image
                                src={r.imageUrl}
                                alt="Description"
                                width={300}
                                height={200}
                                className="object-cover"
                            />
                        </div>
                        <CardTitle>{r.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <span>{r.street}</span> <span>{r.street_number}</span> | <span>{r.city}</span> | <span>{r.postcode}</span>
                        <CardDescription className="flex justify-between ">
                            <span>{r.status}</span>
                            <span>{r.price}</span>
                        </CardDescription>
                    </CardContent>
                    <CardFooter>
                        <a href={`nemovitost/${r.slug}`}><Button>Více...</Button></a>
                    </CardFooter>
                </Card>
            ))
        ) : (
            <div className="p-4 text-red-500">No posts found</div>
        )}
    </div>
    )
}