"use client"
import Image from "next/image";
import Realities from "@/components/realities";
import { RealityCard } from "@/sanity/lib/interfaces";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

export default function Header({realities}: {realities: RealityCard[]}){
    const ref = useRef(null)
    const ref2 = useRef(null)
    const inView = useInView(ref)
    const inView2 = useInView(ref2)
    const ref3 = useRef(null)
    const inView3 = useInView(ref3)
    return(
        <>
        <section ref={ref}
        className={`flex flex-wrap md:flex-nowrap h-screen  bg-white`}>
        <motion.div 
        initial={{opacity: 0, scale: 3}}
        animate={{opacity: 1, scale:1}}
        exit={{opacity: 0, scale: 3}}
        transition={{duration: 0.5}}
        className="w-full md:w-1/2 flex justify-center items-center py-20 md:py-0 px-20  border">
          <Image src="/reality.png" alt="Logo Hrdina reality" width={150} height={150} />
        </motion.div>
        <motion.div 
        initial={{opacity: 0, x: 500}}
        animate={inView?{opacity: 1, x: 0}: {}}
        exit={{opacity: 0, x: 500}}
        transition={{duration: 0.5}}
        className={`w-full md:w-1/2 relative flex justify-center h-[28rem] md:min-h-screen`}>
          <Image src="/hero-image.jpg" alt="test" className="object-cover h-full  w-full" fill={true} loading="eager"/>
        </motion.div>
      </section>
      <section ref={ref2} className="flex flex-col py-20 px-5">
        <motion.h2 
        initial={{opacity: 0, x: 500}}
        animate={inView2?{opacity: 1, x: 0}: {}}
        exit={{opacity: 0, x: 500}}
        transition={{duration: 0.5}}
        className="text-4xl text-center py-6">Nemovitosti v nabídce</motion.h2>
        <Realities realities={realities} />
      </section>
      <section ref={ref3} className="flex flex-wrap md:flex-nowrap md:min-h-screen">
      <div className="w-full md:w-1/2 flex flex-col ">
        <motion.h2 
         initial={{opacity: 0, x: -500}}
         animate={inView3?{opacity: 1, x: 0}: {}}
         exit={{opacity: 0, x: -500}}
         transition={{duration: 0.5}}
        className="m-auto text-4xl font-normal tracking-wider">HRDINA Reality</motion.h2>
      </div>
      <div className="w-full md:w-1/2 flex flex-col py-20 px-5 lg:px-10">
        <motion.div 
        initial={{opacity: 0, x: 500}}
        animate={inView3?{opacity: 1, x: 0}: {}}
        exit={{opacity: 0, x: 500}}
        transition={{duration: 0.5}}
        className="flex flex-col h-full w-full md:w-2/3  font-light text-lg space-y-5 text-left">
          <p >
            Hledáte ideální realitní kancelář, která splní vaše požadavky na nemovitost? Už nehledejte! Naše realitní kancelář
            je dokonalým řešením na jednom místě pro všechny vaše požadavky na prodej, pronájem a nákup.</p>
          <p>Proč si nás vybrat? S dlouholetými zkušenostmi v oboru se náš tým specializovaných profesionálů zavázal poskytovat
            výjimečné služby a poskytovat vynikající výsledky. Chápeme, že každý klient má jiné potřeby, preference a rozpočty, a proto nabízíme
            personalizovaná řešení šitá na míru vašim individuálním cílům v oblasti nemovitostí.</p>
          <p>Ať už chcete prodat svou nemovitost, jste zkušený investor nebo kupujete poprvé, naše odborné znalosti a znalosti
            trhu vám zajistí informovaná rozhodnutí na každém kroku. Uděláme si čas, abychom naslouchali vašim potřebám, porozuměli vaší vizi
            a neúnavně pracujeme na tom, abychom pro vás dosáhli toho nejlepšího možného výsledku.</p>
          <p>Především jsme hrdí na svou integritu, poctivost a transparentnost. Věříme v budování dlouhodobých vztahů s našimi klienty, založených
            na důvěře a spolehlivosti. Jsme s vámi během celého procesu, poskytujeme poradenství, pomoc a zajišťujeme hladký a bezstresový zážitek
            s nemovitostmi.
          </p>
        </motion.div>
      </div>
    </section>
    </>
    )
}