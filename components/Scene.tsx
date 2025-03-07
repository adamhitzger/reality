"use client";

import React, { Suspense, useState, useEffect} from 'react'
import { Canvas, useThree, Vector3 } from "@react-three/fiber";
import { OrbitControls, Plane, ScrollControls, useTexture,Environment, Float, Box, Html, } from "@react-three/drei";
import { BookInter, BookPos } from '@/sanity/lib/interfaces';
import { Book } from './Book';
import { UI } from './UI';
import LoadingScreen from './loadingScreen';

export function Scene({ book }: { book: BookInter[] }) {
    const pages = book.length - 1;
    const mb = book.slice(0,7);
    const [isMobile, setIsMobile] = useState(false);
  // Detect screen width on the client side
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    // Set initial value
    handleResize();

    // Listen for resize events
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
    return (
        <>
        {!isMobile ? <UI data={book}/>: <UI data={mb}/> }
        <Canvas shadows className='flex w-full border-2' style={{ height: "100vh" }} camera={{
            position: [-0.5, 1, 9],
            fov: 45,
          }}>
          <group position-y={0}>
            <Suspense fallback={null}>
        {!isMobile ? <Book data={book}/>: <Book data={mb}/>}
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
        shadow-mapSize-width={512}
        shadow-mapSize-height={512}
        shadow-bias={-0.0001}
      />
      <mesh position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
      </Suspense>
          </group>
          <Html>
            <LoadingScreen/>
            </Html>

        </Canvas>
        </>
    );
}
