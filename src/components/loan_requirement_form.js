import React from 'react';

export default function LoanRequirementForm({ loanData, setLoanData }) {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoanData(prevData => ({ ...prevData, [name]: value }));
    };

    return (
        <div className="form-step active" data-step="3">
            <h3 style={{ marginBottom: '2rem', color: '#2d3748', fontSize: '1.5rem' }}>Loan Requirements</h3>
            <div className="loan-amount">
                <div>Loan Amount</div>
                <div className="amount-display">${loanData.loanAmount}</div>
                <input
                    type="range"
                    id="loanAmount"
                    name="loanAmount"
                    min="1000"
                    max="100000"
                    value={loanData.loanAmount}
                    step="500"
                    onChange={handleInputChange}
                    className="amount-slider"
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                    <span>$1,000</span>
                    <span>$100,000</span>
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="loanPurpose">Loan Purpose</label>
                    <select id="loanPurpose" name="loanPurpose" value={loanData.loanPurpose} onChange={handleInputChange} required>
                        <option value="">Select purpose</option>
                        <option value="home-improvement">Home Improvement</option>
                        <option value="debt-consolidation">Debt Consolidation</option>
                        <option value="medical">Medical Expenses</option>
                        <option value="education">Education</option>
                        <option value="business">Business</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="loanTerm">Loan Term</label>
                    <select id="loanTerm" name="loanTerm" value={loanData.loanTerm} onChange={handleInputChange} required>
                        <option value="">Select term</option>
                        <option value="12">12 months</option>
                        <option value="24">24 months</option>
                        <option value="36">36 months</option>
                        <option value="48">48 months</option>
                        <option value="60">60 months</option>
                    </select>
                </div>
            </div>
        </div>
    );
}