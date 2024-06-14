import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
/* import image from 'app/hlavni-obrazek-1.jpg'; */



const textLeft3 = () => {
    return (
        <section
            className={`flex flex-col md:flex-row h-screen mb-8 bg-gray-100`}>
            <div className="w-full md:w-1/2 p-40 flex flex-col justify-center">

                <h2 className={`text-2xl font-bold text-center mb-4`}>
                NOVÝ ŽIVOT V NÁJMU

                </h2>

                <div className="text-gray-700 mb-4 mt-4 ml-8 w-96">
                    <p>Jde nám především o zlepšení procesu pronájmu, aby byl efektivnější a pro Vás méně náročný. Vy jste vždy na prvním místě a my Vám dáváme volbu vybrat si toho nejlepšího možného nájemníka.</p>
                </div>

                <div className="flex justify-center mt-4">
                    <Link href="seznam.cz">
                        <Button
                            className="bg-transparent hover:bg-[#897953] hover:text-white text-black px-4 border border-gray-800 h-20 overflow-ellipsis overflow-hidden"
                        >
                            JDU DO TOHO
                        </Button>
                    </Link>
                </div>
            </div>
            <div className={`w-full md: flex justify-center items-center border`}>
                <div className="relative w-full h-full py-40 lg:py-0">
                    {/*    <Image src={image} alt="popis" className="object-cover" /> */}
                </div>
            </div>
        </section>
    );
}
export default textLeft3;