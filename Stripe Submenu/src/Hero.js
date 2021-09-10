import React from 'react'
import phone from "./Images/Phone.svg"
import { useGlobalContext } from "./context"


const Hero = () => {

    const {closeSubmenu} = useGlobalContext()

    return (
        <main className="hero" onMouseOver={closeSubmenu}>
            <article className="hero-center">
                <div className="hero-info">
                    <h1>
                        Payments Infrastructure
                        <br />
                        for the internet    
                    </h1>
                    <p>Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.</p>
                    <button className="start-now">Start now</button>
                </div>
                <div className="hero-image">
                    <img src={phone} alt="" />
                </div>
            </article>
        </main>
    )

}


export default Hero
