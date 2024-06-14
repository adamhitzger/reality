import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
/* import image from 'app/hlavni-obrazek-1.jpg'; */



const textRight2 = () => {
    return (
        <section
            className={`flex flex-col md:flex-row h-screen mb-8 bg-gray-100`}>
            <div className={`w-full md: flex justify-center items-center border`}>
                <div className="relative w-full h-full py-40 lg:py-0">
                    {/*    <Image src={image} alt="popis" className="object-cover" /> */}
                </div>
            </div>
            <div className="w-full md:w-1/2 p-40 flex flex-col justify-center">


                <h2 className={`text-2xl font-bold text-center mb-4`}>
                    NAJDĚTE SVŮJ NOVÝ DOMOV
                </h2>

                <div className="text-gray-700 mb-4 mt-4 ml-8 w-96">
                    <p>Domov je mnohem více než jen čtyři stěny a střecha nad hlavou. Je to místo, kde si vytváříte vzpomínky, zakládáte rodinu a bavíte přátele. Tam se odehrává život. Chápeme, že si kupujete životní styl a připravujete další kapitolu svého života. Naší úlohou je Vám v tomto pomáhat.

                    </p>
                </div>

                <div className="flex justify-center mt-4">
                    <Link href="seznam.cz">
                        <Button
                            className="bg-transparent hover:bg-[#897953] hover:text-white text-black px-4 border border-gray-800 h-20 overflow-ellipsis overflow-hidden"
                        >
                            NAJDĚTE SVŮJ DOMOV
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
export default textRight2;