import React from 'react'

export default function Heading({ text }: { text: string }) {
    return (
        <div className='flex items-center justify-center text-center pt-16 pb-7'>
            <h1 className='uppercase text-center text-3xl'>{text}</h1>
        </div>
    )
}

