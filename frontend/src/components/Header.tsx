import React from 'react'
import { Logo } from './Logo'

export function Header() {
    return (
        <div className='w-full py-5 bg-gray-700 flex justify-center align-center border-b border-gray-600'>
            <Logo />
        </div>
    )
}
