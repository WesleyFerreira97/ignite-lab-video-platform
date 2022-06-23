import React from 'react'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { VideoSection } from '../components/VideoSection'

export function Event() {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <main className='flex flex-1'>
                <VideoSection />
                <Sidebar />
            </main>
        </div>
    )
}
