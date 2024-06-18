

import { Scene } from '@/components/Scene';
import { sanityFetch } from '@/sanity/lib/fetch';
import { Plane, useTexture } from '@react-three/drei';
import { SanityDocument } from 'next-sanity';
import React from 'react'
import { Vector3 } from 'three';
import { BOOK_QUERY } from '@/sanity/lib/queries';
import { BookInter } from '@/sanity/lib/interfaces';


export default async function Book() {
    const data = await sanityFetch<BookInter[]>({
        query: BOOK_QUERY,
    })
    console.log(data);
    return (
        <div className='h-screen'>
            <Scene book={data} />
        </div>
    )
}
