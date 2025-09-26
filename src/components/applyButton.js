import React from 'react'

export default function ApplyButton( {text, onclickFunctionality }) {
    return (
        <>
         
         <button className="btn-apply" onClick={onclickFunctionality}>{text}</button>
        </>
        
    )
}
