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
import { Pages } from "@/sanity/lib/interfaces";
import Link from "next/link";

export default function PagesComponent({ pages }: { pages: Pages[] }) {
    console.log(pages);
    return (<div className="grid grid-cols-2 w-full gap-5">
        {pages?.length > 0 ? (
            pages.map((p, i) => (
                <Card key={i} className="w-full">
                    <CardHeader>
                        <div className="w-full relative">
                            <Image
                                src={p.pageImageUrl}
                                alt="Description"
                                width={300}
                                height={200}
                                className="object-cover"
                            />
                        </div>
                        <CardTitle>{p.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Link href={`/podstranky/${p.slug}`}><Button>{p.name}</Button></Link>
                    </CardContent>
                </Card>
            ))
        ) : (
            <div className="p-4 text-red-500">No posts found</div>
        )}
    </div>

    )


}