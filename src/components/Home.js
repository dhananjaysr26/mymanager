import React from 'react'
import '../styles/Home.css'
function Home() {
    return (
        <div className='home'>
            <div className='home-senter'>
                <h1>Home Wifi Network!</h1>
                <p>Pay and Use Wifi service for my neighbour</p>
                <button className='start-btn'>Start New Wifi Connection</button>
            </div>
        </div>
    )
}
export default Home
