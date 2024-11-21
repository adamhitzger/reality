"use client";

import React, { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from './ui/button';
import { formUrlQuery } from '@/lib/utils';

export default function Filters() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [active, setActive] = useState<string>("");
    const filters = [
        { name: "K pronájmu", value: "kpronajmu" },
        { name: "Na prodej", value: "naprodej" },
        { name: "Prodáno", value: "prodano" }
    ];

    const handleTypeClick = (item: string) => {
        if (active === item) {
            setActive("");

            const newUrl = formUrlQuery({
                params: searchParams.toString(),
                key: 'filter',
                value: null
            })

            router.push(newUrl, { scroll: false });
        } else {
            setActive(item);

            const newUrl = formUrlQuery({
                params: searchParams.toString(),
                key: 'filter',
                value: item.toLowerCase()
            })

            router.push(newUrl, { scroll: false });
        }
    }
    return (
        <div className="flex justify-between w-full md:w-1/2 mx-auto ">
            {filters.map((f) => (
                <Button key={f.value} onClick={() => { }}
                    className={`${active === f.value
                        ? "bg-[#897953]"
                        : null
                        }`}
                    size={"lg"}
                    onClickCapture={() => handleTypeClick(f.value)}
                >
                    {f.name}
                </Button>
            ))}
        </div>
    )
}

