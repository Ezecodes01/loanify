import React,{useState} from 'react'
import EmiResult from './emi_result'
import ApplyButton from './applyButton'

export default function Calculator() {
    const [result,setResult ] = useState(0);
    const [amount,setAmount ] = useState(0);
    const [rate,setRate ] = useState(1);
    const [duration,setDuration ] = useState(1);
    
    function changeDurationValue(ezecode) {
         setDuration(ezecode.target.value)
    }     

    function CalculateEmi(event){
          // Formula: E = P * r * (1+r)^n / ((1+r)^n - 1)
            // Where:
            // E = EMI
            // P = Principal loan amount
            // r = monthly interest rate (annualInterestRate / 12 / 100)
            // n = loan term in months (loanTermYears * 12)
            const monthlyInterestRate = rate / 12 / 100;
            const loanTermMonths = duration * 12;

            const emi = amount * monthlyInterestRate * Math.pow(1 +
            monthlyInterestRate, loanTermMonths) / (Math.pow(1 +
            monthlyInterestRate, loanTermMonths) - 1)

            setResult(emi.toFixed(2));
    }

    return (
     

        <div className="emi-content">
            <div class="emi-calculator-wrapper">
                <div class="form-group emi-input-group">
                    <label for="emiLoanAmount">Loan Amount ($)</label>
                    <input type="number" id="emiLoanAmount" value={amount} min="1000" step="500"
                    onInput={(ezecode) => setAmount(ezecode.target.value)}/>
                </div>
                <div class="form-group emi-input-group">
                    <label for="emiInterestRate">Interest Rate (%)</label>
                    <input type="number" id="emiInterestRate" value={rate} min="1" max="30" step="0.1" onChange={(ezecode) => setRate(ezecode.target.value)}/>
                </div>
                <div class="form-group emi-input-group">
                    <label for="emiLoanTerm">Loan Term (Years)</label>
                    <input type="number" id="emiLoanTerm" value={duration} min="1" max="30"
                    onInput={changeDurationValue}/>
                </div>
    
                <ApplyButton text='Calculate EMI' onclickFunctionality={CalculateEmi}/>

                {/* /**Emi result component**/}
                { 
                  result ? <EmiResult amount={result} /> : ""
                }

            </div>
        </div>


    )
}
