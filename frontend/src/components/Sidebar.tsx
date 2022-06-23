import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { Lesson } from './Lesson'

const GET_LESSONS_QUERY = gql`
    query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
        id
        lessonType
        availableAt
        slug
        title
    }
}`

interface GetLessonsQueryResponse {
    lessons: {
        id: string;
        title: string
        slug: string;
        availableAt: string;
        lessonType: 'live' | 'class';
    }[]
}

export function Sidebar() {
    const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY)

    console.log(data);

    return (
        <div className='w-[348px] bg-gray-700 p-6 border-l border-gray-600'>
            <span className='w-full font-bold text-2xl mb-6 pb-6 border-b border-gray-500 block'>
                Cronograma das aulas
            </span>

            <div className='flex flex-col gap-8'>
                {data?.lessons.map(lesson => {
                    return (
                        <Lesson
                            key={lesson.id}
                            title={lesson.title}
                            slug={lesson.slug}
                            availableAt={new Date(lesson.availableAt)}
                            type={lesson.lessonType}
                        />
                    )
                })}
            </div>
        </div>
    )
}
