import React from 'react'
import ApplyButton from './applyButton'
export default function Footer() {
    return (
          <footer>
                < div className="footer-content" >
                    <div className="footer-section about-section">
                        <h3>JDTEK</h3>
                        <p>We are a passionate team dedicated to empowering creators and innovators.</p>
                        <div class="social-media">
                            <a href="#">Facebook</a>
                            <a href="#">Twitter</a>
                            <a href="#">Instagram</a>
                        </div>
                    </div>
                    <div className="footer-section links-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="footer-section newsletter-section">
                        <h3>Stay Updated</h3>
                        <form action="#" className='forms'>
                            <input type="email" placeholder="Enter your email..." />
                           <ApplyButton text={'Subscribe'}/>
                        </form>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2025 [Your Company Name]. All Rights Reserved.</p>
                    <p><a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
                </div>
         </footer>
    )
}
