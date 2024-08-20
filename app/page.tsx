import TextWithImage from "@/components/TextWithImage";
import Realities from "@/components/realities";
import { sanityFetch } from "@/sanity/lib/fetch";
import { RealityCard, SectionsOnMainPage, TextWithImageSection } from "@/sanity/lib/interfaces";
import { MAIN_SECTIONS, REALITIES_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
export default async function Home() {
  const realitiesPromise = await sanityFetch<RealityCard[]>({
    query: REALITIES_QUERY,
  });
  const sectionsPromise = await sanityFetch<SectionsOnMainPage[]>({
    query: MAIN_SECTIONS,
  });

  const [realities, sections] = await Promise.all([
    realitiesPromise,
    sectionsPromise
  ])
  console.log(realities);
  return (
    <main className="flex flex-col">
      <section
        className={`flex flex-wrap md:flex-nowrap h-screen  bg-white`}>
        <div className="w-full md:w-1/2 flex justify-center items-center py-20 md:py-0 px-20  border">
          <Image src="/reality.png" alt="Logo Hrdina reality" width={150} height={150} />
        </div>
        <div className={`w-full md:w-1/2 relative flex justify-center h-[28rem] md:min-h-screen`}>
          <Image src="/hero-image.jpg" alt="test" className="object-cover h-full  w-full" fill={true} />
        </div>
      </section>
      <section className="flex flex-col py-20 px-5">
        <span className="text-4xl text-center py-6">Nemovitosti v nabídce</span>
        <Realities realities={realities} />
      </section>
      <section className="flex flex-wrap md:flex-nowrap md:min-h-screen">
        <div className="w-full md:w-1/2 flex flex-col ">
          <span className="m-auto text-4xl font-normal tracking-wider">HRDINA Reality</span>
        </div>
        <div className="w-full md:w-1/2 flex flex-col py-20 px-5 lg:px-10">
          <div className="flex flex-col h-full w-full md:w-2/3  font-light text-lg space-y-5 text-left">
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
          </div>
        </div>
      </section>
      {sections.map((section: SectionsOnMainPage, id: number) => (
        <TextWithImage
          key={id}
          _type="textWithImage"
          heading={section.textWithImage.heading}
          text={section.textWithImage.text}
          image_pos={section.textWithImage.image_pos}
          textWithImageUrl={section.textWithImage.textWithImageUrl}
          position={section.textWithImage.position}
          button={section.textWithImage.button}
          heading_cap={section.textWithImage.heading_cap}
          isDynamic={true}
        />
      ))}
    </main>
  );
}
