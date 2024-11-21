"use client";

<<<<<<< HEAD
import React, { Suspense} from 'react'
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Plane, ScrollControls, useTexture,Environment, Float, } from "@react-three/drei";
import { BookInter, BookPos } from '@/sanity/lib/interfaces';
import { Book } from './Book';
import { UI } from './UI';


export function Scene({ book }: { book: BookInter[] }) {
    const pages = book.length - 1;
    console.log(pages)
    if(typeof window !== "undefined"){
    return (
        <>
        <UI data={book}/>
        <Canvas shadows className='flex w-full border-2' style={{ height: "100vh" }} camera={{
            position: [-0.5, 1, window.innerWidth > 800 ? 4 : 9],
            fov: 45,
          }}>
          <group position-y={0}>
            <Suspense fallback={null}>
            <Float
        rotation-x={-Math.PI / 4}
        floatIntensity={1}
        speed={2}
        rotationIntensity={2}
      >
        <Book data={book}/>
      </Float>
      <OrbitControls />
      <Environment preset="studio"></Environment>
      <directionalLight
        position={[2, 5, 2]}
        intensity={2.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />
      <mesh position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
            </Suspense>
          </group>
        </Canvas>
        </>
    );
}
=======
import React, { useLayoutEffect, useRef, useState } from 'react'
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Plane, ScrollControls, useTexture, Scroll, Html, GizmoHelper, PivotControls } from "@react-three/drei";
import { BookInter, BookPos } from '@/sanity/lib/interfaces';
import { motion } from "framer-motion-3d";
import { animate, Variants } from 'framer-motion';
import * as THREE from "three";

function List({ frontUrl, backUrl, position, id }: BookPos) {
    const [click, setClick] = useState<boolean>(false);
    const frontTexture = useTexture(frontUrl);
    const backTexture = useTexture(backUrl);
    const groupVariants: Variants = {
        clicked: {
            rotateY: -Math.PI,
            x: -11,
            z: id * -1,
            transition: { duration: 0.8 }
        },
        unclicked: {
            rotateY: 0,
            x: 0,
            z: id,
            transition: { duration: 0.8 }
        }
    }
    return (
        <motion.group
            position={position}
            initial={false}
            whileTap={{ scale: 1.1 }}
            animate={click ? "clicked" : "unclicked"}
            variants={groupVariants}
        >

            <Plane args={[10, 10]} position={[0, 0, 0.003]}>
                <meshStandardMaterial map={frontTexture} />
            </Plane>
            <Plane args={[5, 2]} position={[3.5, -2, 0]} onClick={() => setClick(!click)}>
                <meshBasicMaterial side={THREE.DoubleSide} color="#897953" />

            </Plane>
            <Plane args={[10, 10]} position={[0, 0, -0.003]} rotation-y={Math.PI}>
                <meshStandardMaterial map={backTexture} />
            </Plane>
        </motion.group>
    )
}


export function Expirience({ book }: { book: BookInter[] }) {
    const [click, setClick] = useState<number>(0);
    const pages = book.length - 1;
    console.log(pages)
    return (
        <Canvas className='flex w-full border-2' style={{ height: "100vh" }} camera={{ fov: 120 }}>

            <OrbitControls
                minAzimuthAngle={-Math.PI / 4}
                maxAzimuthAngle={Math.PI / 4}
                minPolarAngle={Math.PI / 6}
                maxPolarAngle={Math.PI - Math.PI / 6}
            />
            <ambientLight />
            {book.map((page: any, id: number) => (
                <List backUrl={page.backUrl} frontUrl={page.frontUrl} position={[0, 0, id / 100]} key={id} id={id} />

            ))}
        </Canvas>
    );

>>>>>>> origin/main
}