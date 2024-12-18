"use client";

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
           
        <Book data={book}/>
      <OrbitControls
      minPolarAngle={Math.PI / 2} // Omezí spodní pohyb na 45 stupňů
      maxPolarAngle={Math.PI / 2} // Omezí horní pohyb na 90 stupňů
      minAzimuthAngle={-Math.PI / 2} // Omezí horizontální pohyb doleva
      maxAzimuthAngle={Math.PI / 2} // Omezí horizontální pohyb doprava
      minDistance={1} // Minimální vzdálenost kamery od cíle
      maxDistance={3}
      />
      <Environment preset="forest"></Environment>
      <directionalLight
        position={[2, 5, 2]}
        intensity={0.5}
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

}