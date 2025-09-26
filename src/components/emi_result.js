import React from 'react'

const p_style = { marginTop: '1rem', color: '#4a5568', fontSize: '0.9rem' };

export default function EmiResult({amount}) {
    return (


        <div id="emiResult" class="emi-result" style={{ display: 'block' }}>
            <div class="emi-result-title">Your Monthly EMI is:</div>
            <div class="emi-result-value" id="emiValue">${amount}</div>
            <p style={p_style}>This is an estimate. Final rates may vary.</p>
        </div>

    )
}


