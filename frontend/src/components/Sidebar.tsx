import React from 'react'
import { Lesson } from './Lesson'

export function Sidebar() {
    return (
        <div className='w-[348px] bg-gray-700 p-6 border-l border-gray-600'>
            <span className='w-full font-bold text-2xl mb-6 pb-6 border-b border-gray-500 block'>
                Cronograma das aulas
            </span>

            <div className='flex flex-col gap-8'>
                <Lesson />
                <Lesson />
                <Lesson />
                <Lesson />
                <Lesson />
            </div>
        </div>
    )
}
