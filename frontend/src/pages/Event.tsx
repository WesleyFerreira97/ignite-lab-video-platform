import React from 'react'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { VideoSection } from '../components/VideoSection'

export function Event() {
    return (
        <>
            <Header />
            <main className='flex'>
                <VideoSection />
                <Sidebar />
            </main>
        </>
    )
}
