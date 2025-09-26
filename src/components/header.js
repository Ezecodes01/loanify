
import React from 'react'
import ApplyButton from './applyButton'
import { Link,useNavigate } from 'react-router-dom'

export default function Header() {
    const navigation = useNavigate();

    function navigationToApplicationPage(event){
        navigation("/apply");
    }
    return (
        <header className="header">
            <nav className="nav">
                <div className="logo">FlexiLoan</div>
                <ul className="nav-links">
                    <li><Link to= '/'>Home</Link></li>
                    <li><Link to= '/emi' >EMI Calculator</Link></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <ApplyButton text='Apply now'  onclickFunctionality={navigationToApplicationPage}/>
            </nav>
        </header>
    )
}



