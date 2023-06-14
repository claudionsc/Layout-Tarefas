import React from 'react'
import { Aside } from '../Aside/Aside'
import { Article } from '../Article/Article'

export const Home = () => {
    return (
        <main className='home'>
            <Aside />
            <Article />
        </main>
    )
}
