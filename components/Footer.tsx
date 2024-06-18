import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex justify-center items-center mb-4 sm:mb-0">
                        <img src="https://uploads-ssl.webflow.com/6458c17b7a0f002ab83c0908/6458c17b7a0f000b673c09aa_logo.png" className="h-8" alt="Flowbite Logo" />
                    </div>
                    <ul className="flex flex-wrap justify-center items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 mx-auto">              <li>
                        <a href="#" className="hover:underline mr-4 md:mr-6">Domů</a>
                    </li>
                        <li>
                            <a href="#" className="hover:underline mr-4 md:mr-6">Realitní služby</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline mr-4 md:mr-6">Nemovitosti</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline mr-4 md:mr-6">Recenze</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline mr-4 md:mr-6">O nás</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Kontakt</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://pornhub.com/" className="hover:underline">Hizzi je buh</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}

