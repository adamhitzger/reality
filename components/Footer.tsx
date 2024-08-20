import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "react-social-icons/component"
import 'react-social-icons/facebook'
import 'react-social-icons/instagram'
import 'react-social-icons/linkedin'
export default function Footer() {
    const year: number = new Date().getFullYear();
    const icons = [
        {
            icon: "instagram",
            link: "https://www.instagram.com/hrdina_reality/"
        },
        {
            icon: "facebook",
            link: "https://www.facebook.com/HrdinaReality/"
        },
        {
            icon: "linkedin",
            link: "https://cz.linkedin.com/in/luk%C3%A1%C5%A1-hrdina-33414258?original_referer=https%3A%2F%2Fwww.google.com%2F"
        }
    ]
    return (
        <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="flex flex-col sm:flex-row items-center sm:justify-between">
                    <div className="flex justify-center items-center mb-4 sm:mb-0  h-24 relative w-28">
                        <Image src="/reality.png" className="h-8" alt="Hrdina reality logo" fill={true} />
                    </div>
                    <ul className="flex flex-wrap justify-center items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 mx-auto">
                        <li>
                            <a href="/" className="hover:underline mr-4 md:mr-6">Domů</a>
                        </li>
                        <li>
                            <a href="/podstranky/realitni-sluzby" className="hover:underline mr-4 md:mr-6">Realitní služby</a>
                        </li>
                        <li>
                            <a href="/nemovitosti" className="hover:underline mr-4 md:mr-6">Nemovitosti</a>
                        </li>
                        <li>
                            <a href="/book" className="hover:underline mr-4 md:mr-6">Recenze</a>
                        </li>
                        <li>
                            <a href="/nas-tym" className="hover:underline mr-4 md:mr-6">O nás</a>
                        </li>
                        <li>
                            <a href="/kontakt" className="hover:underline">Kontakt</a>
                        </li>
                    </ul>
                    <div className="flex flex-row justify-between ">
                        {icons.map((i, idx: number) => (
                            <Link key={idx} href={i.link}>
                                <SocialIcon network={i.icon} url={i.link} style={{ height: "3rem", width: "3rem" }} as="div" bgColor="white" fgColor="black" />
                            </Link>
                        ))}
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© {year} <a href="https://cz.linkedin.com/in/adam-hitzger-aa518622b" className="hover:underline">Adam Hitzger</a>. All Rights Reserved.</span>
            </div>
            <div className="w-full h-24">

            </div>
        </footer>
    )
}

