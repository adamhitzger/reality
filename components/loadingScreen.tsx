"use client"

import { useProgress } from "@react-three/drei";

export default function LoadingScreen(){
    const { progress, active } = useProgress();
    return(
        <div className={`border fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white transition-opacity duration-500 ${active ? "opacity-100" : "animate-fade-out"}`}>
      <div className="text-center">
        <h1 className="text-6xl font-bold text-black mb-8">Hrdina Reality</h1>
        <div className="w-96 h-12 bg-black relative overflow-hidden rounded-xl">
          <div
            className="h-full bg-blue-900 transition-all duration-500 ease-in-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
    )
}