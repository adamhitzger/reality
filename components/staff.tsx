import { PortableText, SanityDocument } from 'next-sanity'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { Staff } from '@/sanity/lib/interfaces'
import { components } from '@/sanity/lib/components'

export default function StaffComponent({ staff }: { staff: Staff[] }) {
    return (
        <section className='w-full grid grid-cols-1'>
            {staff.map((employee: any, id: number) => (
                <div key={id} className={`w-full flex flex-wrap-reverse md:flex-nowrap  min-h-fit  ${id % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse text-right"}`}>
                    <div className='w-full md:w-1/2 flex flex-col justify-center space-y-2 px-5 font-light'>
                        <span className='text-[#897953] font-semibold'>{employee.position}</span>
                        <span className='text-4xl font-semibold'>{employee.name}</span>
                        <div className='text-lg py-5'>
                            <PortableText value={employee.description} components={components} />
                        </div>
                        {employee.url &&
                            <Link href={employee.url} className='py-5'>
                                <Button size={"lg"}>Personální web</Button>
                            </Link>
                        }
                    </div>
                    <div className='w-full py-10 md:py-0 h-auto md:w-1/2 flex justify-center items-center'>
                        <div className=' h-[28rem] md:h-screen w-1/2 relative'>
                            <Image src={employee.staffUrl} alt={employee.staffUrl} fill={true} className='object-contain' />
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

