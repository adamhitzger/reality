"use client";

import React, { useLayoutEffect, useRef, useState } from 'react'
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Plane, ScrollControls, useTexture, Scroll } from "@react-three/drei";
import { BookInter, BookPos } from '@/sanity/lib/interfaces';
import { motion } from "framer-motion-3d";
import { Variants } from 'framer-motion';
function List({ frontUrl, backUrl, position }: BookPos) {
    const [click, setClick] = useState<boolean>(false);
    const frontTexture = useTexture(frontUrl);
    const backTexture = useTexture(backUrl);
    const groupVariants: Variants = {
        clicked: {
            rotateY: Math.PI / 4,
            z: 6,
            transition: { duration: 0.8 }
        },
        unclicked: {
            rotateY: -Math.PI / 4,
            z: -6,
            transition: { duration: 0.8 }
        }
    }
    return (
        <motion.group
            position={position}
            initial={false}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            onClick={() => setClick(!click)}
            animate={click ? "clicked" : "unclicked"}
            variants={groupVariants}
        >
            <Plane args={[10, 10]} position={[0, 0, 0]}>
                <meshStandardMaterial map={frontTexture} />
            </Plane>
            <Plane args={[10, 10]} position={[0, 0, -0.001]} rotation-y={Math.PI}>
                <meshStandardMaterial map={backTexture} />
            </Plane>
        </motion.group>
    )
}

export function Expirience({ book }: { book: BookInter[] }) {
    const pages = book.length;

    return (
        <Canvas>
            <OrbitControls />
            <ambientLight />
            {book.map((page: any, id: number) => (
                <List key={id} backUrl={page.backUrl} frontUrl={page.frontUrl} position={[id / 1, 0, 0]} />
            ))}
        </Canvas>
    );

}