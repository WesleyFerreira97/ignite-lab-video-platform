import { CheckCircle } from 'phosphor-react'
import React from 'react'

export function Lesson() {
    return (
        <a href="" className=''>
            <span className='text-gray-300'>
                Domingo • 20 de junho • 19h00
            </span>

            <div className='p-4 mt-2 border border-gray-500 rounded'>
                <header className='flex justify-between'>
                    <span className='flex items-center gap-2 text-sm text-blue-500 font-medium'>
                        <CheckCircle size={20} />
                        Conteúdo liberado
                    </span>
                    <span className='text-xs rounded py-[2px] px-2 text-white border border-green-300 font-bold'>
                        Ao Vivo
                    </span>
                </header>

                <strong className='text-gray-200 mt-5 font-bold block'>
                    Abertura do evento Ignite labs
                </strong>
            </div>

        </a>
    )
}
