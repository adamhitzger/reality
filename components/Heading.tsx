import React from 'react'

export default function Heading({ text }: { text: string }) {
    return (
        <div className='flex '>
            <h1 className='uppercase text-center'>{text}</h1>
        </div>
    )
}

