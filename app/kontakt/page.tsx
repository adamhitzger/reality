
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MyMap from '@/components/MyMap';
import ContactForm from '@/components/ContactForm';
import { ArrowRight } from 'lucide-react';

export default function ContactPage() {
    return (
        <main className='flex flex-col'>
            <h1 className='text-5xl py-20 text-center'>Kontaktujte nás</h1>
            <section className='flex flex-wrap md:flex-nowrap md:h-screen'>
                <div className="w-full md:w-1/2 flex flex-col  px-5  font-light">
                    <h2 className='text-3xl font-semibold md:px-16'>Kontaktní formulář</h2>
                    <ContactForm />
                </div>
                <div className={`w-full md:py-10 h-[28rem] md:h-screen md:w-1/2 flex justify-center`}>
                    <div className={`relative  h-full w-2/3`}>
                        <Image src={"/formImage.jpg"} alt={"Hrdina Reality - ozvěte se nám a my Vám odpovíme!"} fill={true} className="object-cover bg-cover" />
                    </div>
                </div>
            </section>
            <section className='px-16 py-10 flex flex-col'>
                <div>
                    <h2 className='text-3xl font-semibold mt-12 mb-8'>Kontaktní formulář</h2>
                    <span className='text-gray-400'>Neváhejte navštívit naši kancelář</span>
                    <div className='w-full flex flex-row items-center '>
                        <div className='my-5 p-5 border-l-fuchsia-600 border-l-4 w-full md:w-1/2 space-y-3 '>
                            <span className='text-xl'>Hrdina Reality</span>
                            <p className='text-sm'>
                                Havlíčkovo náměstí 56,<br />
                                Havlíčkův Brod 580 01
                            </p>
                            <div className='text-fuchsia-600 flex flex-row'>
                                <span > <Link href={"#"}>Ukázat na mapě </Link></span><ArrowRight className='mx-3' />
                            </div>
                        </div>
                        <div className="py-4 h-96 w-full md:w-1/2">
                            <MyMap latitude={49.6067} longitude={15.5746} />
                        </div>
                    </div>

                </div>
            </section>
        </main>
    )
}
