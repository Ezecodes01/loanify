import React from 'react'

export default function PersonalInfoForm({firstnameRef, lastnameRef, emailRef,dobRef,ssnRef,phoneRef,addressRef}) {
    return (



        <div class="form-step active" data-step="1">
            <h3 style={{ marginBottom: '2rem', color: '#2d3748', fontSize: '1.5rem' }}> Personal Information</h3>

            <div class="form-row">
                <div class="form-group">
                    <label for="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" ref={firstnameRef} />
                </div>
                <div class="form-group">
                    <label for="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" ref={lastnameRef} />
                </div>
            </div>

            <div class="form-row">
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" name="email"ref={emailRef} />
                </div>
                <div class="form-group">
                    <label for="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" ref={phoneRef}/>
                </div>
            </div>

            <div class="form-row">
                <div class="form-group">
                    <label for="dateOfBirth">Date of Birth</label>
                    <input type="date" id="dateOfBirth" name="dateOfBirth" ref={dobRef}/>
                </div>
                <div class="form-group">
                    <label for="ssn">Social Security Number</label>
                    <input type="text" id="ssn" name="ssn" placeholder="XXX-XX-XXXX" ref={ssnRef} />
                </div>
            </div>

            <div class="form-group">
                <label for="address">Address</label>
                <textarea id="address" name="address" rows="3" placeholder="Enter your complete address" ref={addressRef}></textarea>
            </div>
        </div>



    )
}      
