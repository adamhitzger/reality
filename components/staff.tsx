import { PortableText, SanityDocument } from 'next-sanity'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'

export default function StaffComponent({ staff }: { staff: SanityDocument[] }) {
    return (
        <div className='w-full'>
            {staff.map((employee: any, id: number) => (
                <div key={id} className='w-full flex lg:flex-wrap'>
                    <div className='w-1/2 flex-col'>
                        <span>{employee.name}</span>
                        <span>{employee.position}</span>
                        {employee.url &&
                            <Link href={employee.url}>
                                <Button>Personální web</Button>
                            </Link>
                        }
                        <PortableText value={employee.description} />
                    </div>
                    <div className='w-1/2 relative'>
                        <Image src={employee.staffUrl} alt={employee.staffUrl} fill={true} className='object cover' />
                    </div>
                </div>
            ))}
        </div>
    )
}

