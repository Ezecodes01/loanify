import React from 'react'
import Calculator from '../components/calculator'

export default function EMI() {
  return (
    <div id="emi-calculator" class="page active">
      <div class="emi-container">
        <div class="emi-wrapper">
          <div class="emi-header">
            <h2>EMI Calculator</h2>
            <p>Find out your estimated monthly repayment.</p>
          </div>
          <Calculator/>
        </div>
      </div>
    </div>
  )
}
