import React, { useRef, useEffect, useState } from 'react'
import PersonalInfoForm from '../components/personal_info_form'
import StepIndicator from '../components/step_indicator';
import ApplyButton from '../components/applyButton';
import DocumentForm from '../components/document_upload_form';
import LoanRequirementForm from '../components/loan_requirement_form';
import IncomeForm from '../components/income_form';
import Successmessage from '../components/success_message';
import { Link } from 'react-router-dom';

export default function ApplyPage() {
    const [step, setStep] = useState(1);
    const [stage1Data, setStage1Data] = useState({
        "email": "", phone: "", ssn: "", dob: "", address: "", "firstName": "", "lastName": ""
    });
    const [incomeData, setIncomeData] = useState({
        "status": "full-time", income: 0, employerName: "", employmentLength: 1, "jobTitle": ""
    });
    const [applicationId, setApplicationId] = useState(null);
    const [loanData, setLoanData] = useState({
        loanAmount: 10000,
        loanPurpose: '',
        loanTerm: '',
    });
    const [documentData, setDocumentData] = useState({
        idProof: null,
        incomeProof: null,
        bankStatement: null,
    });

    const [isLoading, setIsLoading] = useState(false);

    const phoneNumberRef = useRef();
    const addressRef = useRef();
    const ssnRef = useRef();
    const firstnameRef = useRef();
    const lastnameRef = useRef();
    const dobRef = useRef();
    const emailRef = useRef();

    // we decide to store all refs in an object for easier access and iteration
    const fieldRefs = {
        firstName: firstnameRef,
        lastName: lastnameRef,
        email: emailRef,
        phone: phoneNumberRef,
        dob: dobRef,
        ssn: ssnRef,
        address: addressRef,
    };

    useEffect(() => {
        // on component mount, fill form fields from state
        
        if (firstnameRef.current) {
            phoneNumberRef.current.value = stage1Data.phone;
            ssnRef.current.value = stage1Data.ssn;
            addressRef.current.value = stage1Data.address;
            firstnameRef.current.value = stage1Data.firstName;
            lastnameRef.current.value = stage1Data.lastName;
            emailRef.current.value = stage1Data.email;
            dobRef.current.value = stage1Data.dob;
        }
    }, [stage1Data, step]);

    // Validation functions with clear logic
    const validateEmail = (email) => {
        // Regex for email validation
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const validatePhoneNumber = (phone) => {
        // Regex for a 11-digit phone number to fit ng
        const re = /^\d{11}$/;
        return re.test(phone);
    };

    const validateSSN = (ssn) => {
        // Regex for SSN in ###-##-#### format or 9 digits
        const re = /^\d{3}-?\d{2}-?\d{4}$/;
        return re.test(ssn);
    };

    // New validation function to handle all step 1 fields
    const validateStepOneData = () => {
        const errors = [];

        // Validation for each field
        if (!firstnameRef.current.value || firstnameRef.current.value.length < 3) {
            errors.push({ field: 'firstName', message: 'First name is required and must be at least 3 characters.' });
        }

        if (!lastnameRef.current.value || lastnameRef.current.value.length < 3) {
            errors.push({ field: 'lastName', message: 'Last name is required and must be at least 3 characters.' });
        }

        if (!validateEmail(emailRef.current.value)) {
            errors.push({ field: 'email', message: 'Please enter a valid email address.' });
        }

        // We use the new validation functions here
        if (!validatePhoneNumber(phoneNumberRef.current.value)) {
            errors.push({ field: 'phone', message: 'Please enter a valid 10-digit phone number.' });
        }

        if (!ssnRef.current.value || !validateSSN(ssnRef.current.value)) {
            errors.push({ field: 'ssn', message: 'Please enter a valid SSN (e.g., XXX-XX-XXXX).' });
        }

        if (!dobRef.current.value) {
            errors.push({ field: 'dob', message: 'Date of birth is required.' });
        }

        if (!addressRef.current.value || addressRef.current.value.length < 5) {
            errors.push({ field: 'address', message: 'Address is required and must be at least 5 characters.' });
        }

        // Return the array of errors. If empty, validation passed.
        return errors;
    };

    function applyFunctionality(event) {
        if (step === 1) {
            const errors = validateStepOneData();
            if (errors.length > 0) {
                const firstError = errors[0];

                // Find the ref for the field that failed validation
                const fieldRef = fieldRefs[firstError.field];
                if (fieldRef && fieldRef.current) {
                    fieldRef.current.focus(); // Focus on the field
                    fieldRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' }); // Scroll to the field
                }
                return;
            } else {
                // If validation passes, update the state and proceed to the next step
                setStage1Data({
                    firstName: firstnameRef.current.value,
                    lastName: lastnameRef.current.value,
                    email: emailRef.current.value,
                    phone: phoneNumberRef.current.value,
                    dob: dobRef.current.value,
                    ssn: ssnRef.current.value,
                    address: addressRef.current.value,
                });
            }
        }

        // If there are no errors, proceed to the next step
        if (step < 4) {
            setStep(step + 1);
        }

        else if (step === 4 && documentData.idProof && documentData.bankStatement && documentData.incomeProof) {
            // call the handle submits the code 
            handleSubmit()
        }
    }

    const handleSubmit = async () => {
        setIsLoading(true);
        const formData = new FormData();

        Object.keys(stage1Data).forEach(key => formData.append(key, stage1Data[key]));
        Object.keys(incomeData).forEach(key => formData.append(key, incomeData[key]));
        Object.keys(loanData).forEach(key => formData.append(key, loanData[key]));

        // Append files
        if (documentData.idProof) formData.append('id_proof', documentData.idProof);
        if (documentData.incomeProof) formData.append('income_proof', documentData.incomeProof);
        if (documentData.bankStatement) formData.append('bank_statement', documentData.bankStatement);

        try {
            const response = await fetch(process.env.REACT_APP_BACKEND_URL,{
                method: 'POST',
                body: formData,
            });

            // if (!response.ok) {
            //     const errorData = await response.json();
            //     throw new Error(errorData.error || 'Something went wrong during submission.');
            // }
            if (response.status !== 201) {
                const errorData = await response.json();
                // alert("Not a successful submission")
                throw new Error(errorData.error || 'Something went wrong during submission.');
            }

            // Success case
            const result = await response.json();

            // prefer we show sucess message 
            
            setStep(5); // This will be our success page
            setApplicationId(result.application_id)
            //resetting my form after submitting
            setStage1Data({
                "email": "", phone: "", ssn: "", dob: "", address: "", "firstName": "", "lastName": ""
            });
            setIncomeData({
                "status": "full-time", income: 0, employerName: "", employmentLength: 1, "jobTitle": ""
            });

            setLoanData({
                loanAmount: 10000,
                loanPurpose: '',
                loanTerm: '',
            });
            setDocumentData({
                idProof: null,
                incomeProof: null,
                bankStatement: null,
            });
        } catch (error) {

            console.error('Submission error:', error);
        } finally {
            setIsLoading(false);
        }
    };


    function previousFunctionality(event) {
        if (step > 1) {
            setStep(step - 1);
        }
    }

    return (
        <div id="application" className="page active">
            
            {
                step === 5 ?
                    <div id="success" className="page active">
                        <div class="success-container">
                            <div /*class="success-content"*/ >
                                <Successmessage application_id={applicationId}/>
                                <Link to="/">
                                    <button className="btn-primary">Go to Home Page</button>
                                </Link>
                            </div>
                        </div>
                    </div> 
                    :
                    <div className="form-container">
                    <div className="form-wrapper">
                        <div className="form-header">
                            <h2>Loan Application</h2>
                            <p>Complete your application in just a few simple steps</p>
                        </div>

                        <div className="form-content">
                            <StepIndicator activeStep={step} />

                            <form id="loanForm">
                                {step === 1 && (
                                    <PersonalInfoForm
                                        phoneRef={phoneNumberRef}
                                        addressRef={addressRef}
                                        emailRef={emailRef}
                                        dobRef={dobRef}
                                        ssnRef={ssnRef}
                                        firstnameRef={firstnameRef}
                                        lastnameRef={lastnameRef}
                                    />
                                )}
                                {step === 2 && <IncomeForm incomeData={incomeData} updateIncomeData={setIncomeData} />}
                                {step === 3 && <LoanRequirementForm loanData={loanData} setLoanData={setLoanData} />}
                                {step === 4 && <DocumentForm documentData={documentData} setDocumentData={setDocumentData} />}
                            </form>

                            <div className="form-navigation">
                                <button type="button" className={`${step === 1 ? "btn-prev" : "btn-apply"}`} onClick={previousFunctionality}>Previous</button>
                                <ApplyButton text={`${step === 4 ? "submit" : "next"}`} onclickFunctionality={applyFunctionality} />
                            </div>

                            {isLoading ? <h3 align='center'>loading...</h3> : "" }
                        </div>
                    </div>
                    </div>
            }
           
           
        </div>
    );


}

