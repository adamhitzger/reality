"use client";
import { Menu } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import { Sheet, SheetTrigger, SheetContent, SheetDescription } from './ui/sheet'
import Link from "next/link"

export default function Navbar() {
    const [hovered, setHovered] = useState("");
    const navLinks = [
        {
            route: "/",
            label: "Domů",
            image: "/hlavni-obrazek-1.jpg"
        },
        {
            route: "/podstranky/realitni-sluzby",
            label: "Realitní služby",
            image: "/hlavni-obrazek-2.jpg"
        },
        {
            route: "/nemovitosti",
            label: "Nemovitosti",
            image: "/hlavni-obrazek-3.jpeg"
        },

        {
            route: "/book",
            label: "Recenze",
            image: "/hlavni-obrazek-4.jpg"
        },
        {
            route: "/nas-tym",
            label: "O nás",
            image: "/hlavni-obrazek-5.jpg"
        },
        {
            route: "/kontakt",
            label: "Kontakt",
            image: "/hlavni-obrazek-6.jpeg"
        },
    ];

    return (
        <nav className="fixed bottom-0 left-0 w-full flex px-6 justify-between items-center  bg-gray-800 text-white z-50" >
            <div className='w-1/3  m-3'>
                <div className='w-fit '>
                    <Link href={"/"}>
                        <Image
                            width={90}
                            height={120}
                            src="/reality.png"
                            alt="Logo"
                        />
                    </Link>
                </div>
            </div>
            <div className='flex justify-center w-1/3'>
                <Link href={"/"} className='text-2xl md:text-5xl text-center'>HRDINA Reality</Link>
            </div>
            <div className=" flex flex-1 justify-end items-center mr-10 w-1/3">
                <Sheet >
                    <SheetTrigger><Menu width={32} height={32} color="white" /></SheetTrigger>
                    <SheetContent side={"right"} className="bg-gray-800 w-full ">
                        <SheetDescription className=' w-full h-full  flex items-center px-24 justify-center'>
                            <ul className="list-none flex justify-end items-start flex-1 flex-col space-y-10 w-fit z-50">
                                {navLinks.map((nav, index) => (
                                    <li
                                        key={index}
                                        className={`font-poppins font-medium cursor-pointer text-5xl text-white
                                                } ${index === navLinks.length - 1 ? "mb-0" : "mb-2"}`}
                                        onMouseEnter={() => setHovered(nav.image)}
                                    >
                                        <a href={`${nav.route}`} >{nav.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </SheetDescription>

                        <div className="absolute inset-0 opacity-75 transition-opacity duration-300 w-1/2 h-1/2 m-auto hidden md:flex md:flex-col z-30 ">
                            {navLinks.map((nav, index) => (
                                <Image
                                    src={hovered ? hovered : nav.image}
                                    key={index}
                                    alt="Background"
                                    fill={true}
                                    className={`w-[100vw] h-[100vh] opacity-75 object-contain bg-contain ${hovered ? "animate-slide-in" : null} `}
                                />
                            ))}
                        </div>

                    </SheetContent>
                </Sheet>


            </div>
        </nav>
    )
}
