import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
   
        <section class="hero">
            <div class="hero-content">
                <h1>Your Financial Dreams, Our Reality</h1>
                <p>Get instant loan approval with competitive rates. Simple, fast, and secure loan processing tailored to your needs.</p>
                <div class="cta-buttons">
                    <button class="btn-primary" onclick="showPage('application')">Apply for Loan</button>
                    <button class="btn-secondary" onclick="showPage('emi-calculator')"><Link to='/emi' style={{ textDecoration : 'none'}}>Calculate EMI</Link></button>
                </div>
            </div>
        </section>
 
  )
}
