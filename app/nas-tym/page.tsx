import StaffComponent from '@/components/staff';
import TextWithImage from '@/components/TextWithImage';
import { ourTeam } from '@/constants';
import { sanityFetch } from '@/sanity/lib/fetch';
import { Staff, TextWithImageSection } from '@/sanity/lib/interfaces';
import { STAFF_QUERY } from '@/sanity/lib/queries';
import React from 'react'

export default async function OurTeamPage() {
    const staff = await sanityFetch<Staff[]>({
        query: STAFF_QUERY,
    });
    console.log(staff);
    return (
        <main className='flex flex-col px-10'>
            <section className='text-center w-full flex flex-col py-20 space-y-6 text-lg'>
                <h2 className='text-4xl font-semibold '>Náš tým</h2>
                <div className='my-5 space-y-6 flex flex-col w-full md:w-1/2 font-light md:mx-auto'>
                    <p>Jsme realitní společnost postavená kolem stejně smýšlejících profesionálů s jediným cílem – dosáhnout toho nejlepšího výsledku pro každého klienta.‍</p>
                    <p>Prodej nemovitostí, to není One man show, ale vyžaduje tým nejrůznějších profesí. Podívejte se, kdo je součástí týmu Hrdina Reality.</p>
                </div>
            </section>
            <StaffComponent staff={staff} />
            {ourTeam.map((section: TextWithImageSection, id: number) => (
                <TextWithImage
                    key={id}
                    _type="textWithImage"
                    heading={section.heading}
                    text={section.text}
                    image_pos={section.image_pos}
                    textWithImageUrl={section.textWithImageUrl}
                    position={section.position}
                    button={section.button}
                    heading_cap={section.heading_cap}
                    isDynamic={false}
                />
            ))}
        </main>
    )
}

