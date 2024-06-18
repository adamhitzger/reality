"use client";

import React from 'react'
import { Canvas, Vector3 } from "@react-three/fiber";
import { OrbitControls, Plane, ScrollControls, useTexture } from "@react-three/drei";
import { SanityDocument } from 'next-sanity';
import { BookInter, BookPos } from '@/sanity/lib/interfaces';


function List({ frontUrl, backUrl, position }: BookPos) {
    const frontTexture = useTexture(frontUrl);
    const backTexture = useTexture(backUrl);
    return (
        <group position={position}>
            <Plane args={[10, 10]} position={[0, 0, 0]}>
                <meshStandardMaterial map={frontTexture} />
            </Plane>
            <Plane args={[10, 10]} position={[0, 0, -0.001]} rotation-y={Math.PI / 1}>
                <meshStandardMaterial map={backTexture} />
            </Plane>
        </group>
    )
}

export function Scene({ book }: { book: BookInter[] }) {
    return (
        <Canvas>
            <ambientLight />
            <ScrollControls pages={book.length - 1}>
                {book.map((page: any, id: number) => (
                    <List key={id} backUrl={page.backUrl} frontUrl={page.frontUrl} position={[0, 0, id / 1]} />
                ))}
            </ScrollControls>
        </Canvas>
    )
}