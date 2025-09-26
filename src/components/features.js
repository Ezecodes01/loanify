import React from 'react'
import Card_features from './card_features'
import FEATURES_DATA from '../utils/data'

export default function Features() {
    return (
        <section className="features" id="features">
            <div class="container">
                <h2 class="section-title">Why Choose FlexiLoan?</h2>
                <p class="section-subtitle">We make borrowing simple, transparent, and tailored to your unique financial situation.</p>

                <div class="features-grid">
                 {
                    FEATURES_DATA.map((obj,index)=> <Card_features emoji={obj.emoji} title={obj.title} description={obj.description} key={index}/>
                 )}
                  {/* <Card_features title={"Instant Approval"} emoji={"⚡"} description={"Get loan approval in minutes with our AI-powered assessment system and minimal documentation."}/>
                  <Card_features title={"Competitive Rates"} emoji={"💰"} description={"Enjoy the best interest rates in the market with flexible repayment options tailored to your budget."}/>
                  <Card_features title={"Secure &amp; Private"} emoji={"🔒"} description={"Your data is protected with bank-level security and encrypted throughout the entire process."}/>
                  <Card_features title={"Digital First"} emoji={"📱"} description={"Complete your entire loan journey online without visiting any branch or physical paperwork."}/>
                  <Card_features title={"Flexible Terms"} emoji={"🎯"} description={"Choose from various loan amounts and repayment periods that fit your financial goals."}/>
                  <Card_features title={"Expert Support"} emoji={"🏆"} description={"Our financial experts are available 24/7 to guide you through every step of your loan journey."}/> */}
                </div>
            </div>
        </section>
    )
}


