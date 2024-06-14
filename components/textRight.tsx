import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import image from '../app/hlavni-obrazek-2.jpg';



const textRight = () => {
    return (
        <section
            className={`flex flex-col md:flex-row h-screen mb-8 bg-gray-100`}>
             <div className={`w-1/2 md: flex justify-center items-center border`}>
                <div className="relative w-full h-full py-40 lg:py-0">
               <Image src={image} alt="popis" className="w-full h-full" />
                </div>
            </div>
            <div className="w-full md:w-1/2 p-40 flex flex-col justify-center">


                <h2 className={`text-2xl font-bold text-center mb-4`}>
                    NAŠI MAKLÉŘI
                </h2>

                <div className="text-gray-700 mb-4 mt-4 ml-16 w-96">
                    <p>Od místních makléřů, specializujících se na prodej a pronájem nemovitostí, specialisty na přípravu nemovitostí na prodej, až po odborné fotografické služby a právní služby, jsme tu, abychom Vám pomohli. S odbornými místními znalostmi se náš tým snaží zajistit, abyste dosáhli těch nejlepších výsledků.</p>
                </div>

                <div className="flex justify-center mt-4">
                    <Link href="seznam.cz">
                        <Button
                            className="bg-transparent hover:bg-[#897953] hover:text-white text-black px-4 border border-gray-800 h-20 overflow-ellipsis overflow-hidden"
                        >
                            NÁŠ TÝM
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
export default textRight;