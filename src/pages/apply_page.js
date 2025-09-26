import React,{useRef , useEffect, useState} from 'react'
import Stepindicator from '../components/step_indicator'
import PersonalInfoForm from '../components/personal_info_form'
import ApplyButton from '../components/applyButton'
import Incomeform from '../components/income_form'
import Documentupload_form from '../components/document_upload_form'
import Loanrequirement_form from '../components/loan_requirement_form'

export default function   ApplyPage() {
    const [step,setStep] = useState(1);
    const PhoneNumberRef = useRef();

    useEffect(()=>{
        if(PhoneNumberRef.current){
            const phone_input =PhoneNumberRef.current;
            console.log(phone_input)
            phone_input.style.borderColor = "red";
        }

    //     console.log("Component did mount");

    //     let interval_id =setInterval(() => {
    //         time++
    //         console.log(time)
    //     },3000)

    //     return ()=>
    })

    // useEffect(()=>{

    // })

    function applyFunctionality(event ){
        if(step < 4){
            setStep(step + 1);
        }
    }

    function PreviousFunctionality(event ){
        if(step > 1){
            setStep(step - 1);
        }
    }


    return (
        <div id="application" class="page active">
            <div class="form-container">
                <div class="form-wrapper">

                    <div class="form-header">
                        <h2>Loan Application</h2>
                        <p>Complete your application in just a few simple steps</p>
                    </div>
                    <div class="form-content">
                        <Stepindicator activeStep={step} />
                        <form id="loanForm"> 
                            {
                                step == 1 && (
                                    <PersonalInfoForm phoneRef={PhoneNumberRef}/>
                                )
                            }

                            {
                                step == 2 && (
                                    <Incomeform/>
                                )
                            }

                            {
                                step == 3 && (
                                    <Loanrequirement_form/>
                                )
                            }
                            
                            {
                                step == 4 && (
                                    <Documentupload_form/>
                                )
                            }



                        </form>
                        <div class="form-navigation">
                            <button type="button" class={`${step == 1 ? "btn-prev" : "btn-apply"} `} onclick={PreviousFunctionality}>Previous</button>
                            <ApplyButton text={`${step == 4 ? "submit" : "next"}`} onclickFunctionality={applyFunctionality}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}



