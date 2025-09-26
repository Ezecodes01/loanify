import React from 'react'

export default function Incomeform({incomeData, updateIncomeData}) {
   
   function updateData(event){
        const value = event.target.value
        const input_name = event.target.name;

        incomeData[input_name] = value;
        updateIncomeData({...incomeData});
    }
    return (
        <div class="form-step active" data-step="2">
            <h3 style={{ marginBottom: '2rem', color: '#2d3748', fontSize: '1.5rem' }}>Employment &amp; Income</h3>
          <h2>{incomeData['employerName']}</h2>
            <div class="form-row">
                <div class="form-group">
                    <label for="employmentStatus">Employment Status</label>
                    <select id="employmentStatus" name="status" value={incomeData['status']} onChange={updateData}>
                        <option value="">Select employment status</option>
                        <option value="full-time">Full-time Employee</option>
                        <option value="part-time">Part-time Employee</option>
                        <option value="self-employed">Self-employed</option>
                        <option value="unemployed">Unemployed</option>
                        <option value="retired">Retired</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="monthlyIncome">Monthly Income ($)</label>
                    <input type="number" id="monthlyIncome" name="income" min="0" value={incomeData['income']} onChange={updateData}/>
                </div>
            </div>

            <div class="form-row">
                <div class="form-group">
                    <label for="employer">Employer Name</label>
                    <input type="text" id="employer" name="employerName"  value={incomeData['employerName']} onChange={updateData}/>
                </div>
                <div class="form-group">
                    <label for="jobTitle">Job Title</label>
                    <input type="text" id="jobTitle" name="jobTitle"  value={incomeData['jobTitle']} onChange={updateData}/>
                </div>
            </div>

            <div class="form-group">
                <label for="employmentLength">Length of Employment</label>
                <select id="employmentLength" name="employmentLength"  value={incomeData['employmentLength']} onChange={updateData}>
                    <option value="">Select length</option>
                    <option value="less-than-1">Less than 1 year</option>
                    <option value="2">2 years</option>
                    <option value="3">3 years</option>
                    <option value="4">4 years</option>
                    <option value="5">5 or more years </option>
                    <option value="more-than-5">More than 5 years</option>
                </select>
            </div>
        </div>

    )
}
