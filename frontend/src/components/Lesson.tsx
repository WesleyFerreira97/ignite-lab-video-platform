import { CheckCircle, Lock } from 'phosphor-react'
import React from 'react'

interface LessonProps {
    title: string
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';

}

export function Lesson(props: LessonProps) {
    const isLessonAvailable = false;


    return (
        <a href="" className=''>
            <span className='text-gray-300'>
                {props.availableAt.toString()}
            </span>

            <div className='p-4 mt-2 border border-gray-500 rounded'>
                <header className='flex justify-between'>

                    {isLessonAvailable ? (
                        <span className='flex items-center gap-2 text-sm text-blue-500 font-medium'>
                            <CheckCircle size={20} />
                            Conteúdo liberado
                        </span>
                    ) : (
                        <span className='flex items-center gap-2 text-sm text-orange-500 font-medium'>
                            <Lock size={20} />
                            Em Breve
                        </span>
                    )}

                    <span className='text-xs rounded py-[2px] px-2 text-white border border-green-300 font-bold'>
                        {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>

                <strong className='text-gray-200 mt-4 font-bold block'>
                    {props.title}
                </strong>
            </div>

        </a>
    )
}
