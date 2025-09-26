import React from 'react'
import Hero from '../components/Hero';
import Features from '../components/features';
export default function Home() {
    return (
        <>
           <div id="landing" class="page active"></div>
           
           <Hero/>
           <Features/>
        </>
    )
}
