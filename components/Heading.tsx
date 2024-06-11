import React from 'react'

export default function Heading({ text }: { text: string }) {
    return (
        <div className='flex items-center justify-center text-center'>
            <h1 className='uppercase text-center text-2xl'>{text}</h1>
        </div>
    )
}

