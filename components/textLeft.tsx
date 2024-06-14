import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import image from '../app/hlavni-obrazek-1.jpg';



const textLeft = () => {
    return (
        <section
            className={`flex flex-col md:flex-row h-screen mb-8 bg-gray-100`}>
            <div className="w-full md:w-1/2 p-40 flex flex-col justify-center">

                <h2 className={`text-2xl font-bold text-center mb-4`}>
                    DĚLÁME PRO VÁS MNOHEM VÍC, NEŽ JENOM PRODÁVÁME VAŠÍ NEMOVITOST
                </h2>

                <div className="text-gray-700 mb-4 mt-4 ml-8 w-96">
                    <p>V HRDINA Reality zastáváme jedinečný přístup k prodeji nemovitostí. Přístup, který nám umožňuje poskytovat informace a poznatky, které Vy, jako prodávající, potřebuje pro informovaná a správná rozhodnutí při prodeji a pronájmu Vaší nemovitosti.
                        ‍
                        Naším cílem je poskytnout Vám jedinečný zážitek z prodeje a pronájmu a dosáhnout pro Vás prémiové ceny. </p>
                </div>

                <div className="flex justify-center mt-4">
                    <Link href="seznam.cz">
                        <Button
                            className="bg-transparent hover:bg-[#897953] hover:text-white text-black px-4 border border-gray-800 h-20 overflow-ellipsis overflow-hidden"
                        >
                            CHCI SE DOZVĚDĚT VÍCE
                        </Button>
                    </Link>
                </div>
            </div>
            <div className={`w-1/2 md: flex justify-center items-center border`}>
                <div className="relative w-full h-full py-40 lg:py-0">
               <Image src={image} alt="popis" className="w-full h-full" />
                </div>
            </div>
        </section>
    );
}
export default textLeft;