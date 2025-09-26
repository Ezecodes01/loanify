import React from 'react'

export default function Successmessage({application_id}) {
  return (
    <div id="success" class="page active ">
      <div class="success-container" style={{marginTop:"5rem"}}>
        <div class="success-content">
          <div class="success-icon">✅</div>
          <h1 style={{fontSize: '2.5rem', marginBottom: '1rem'}}>Application Submitted!</h1>
          <p style={{fontiSze: '1.2rem', marginBottom: '2rem'}}>Thank you for choosing FlexiLoan. Your loan application has been successfully submitted and is now under review.</p>
          <p style={{marginBottom: '2rem'}}  >Application ID: <strong id="applicationId">{application_id}</strong></p>

        </div>
      </div>
    </div>
  )
}
