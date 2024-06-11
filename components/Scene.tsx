"use client";

import React from 'react'
import { Canvas, Vector3 } from "@react-three/fiber";
import { OrbitControls, Plane, useTexture } from "@react-three/drei";
import { SanityDocument } from 'next-sanity';


function List({ front, back, position }: { front: string, back: string, position: Vector3 }) {
    const frontTexture = useTexture(front);
    const backTexture = useTexture(back);
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

export function Scene({ book }: { book: SanityDocument[] }) {
    return (
        <Canvas>
            <ambientLight />
            <OrbitControls />
            {book.map((page: any, id: number) => (
                <List key={id} back={page.backUrl} front={page.frontUrl} position={[0, 0, id / 1]} />
            ))}

        </Canvas>
    )
}