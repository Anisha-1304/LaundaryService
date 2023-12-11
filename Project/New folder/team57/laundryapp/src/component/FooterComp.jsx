import React from 'react'
import './FooterComp.css'

export default function FooterComp() {
  return (
    <div>
    <div className='Footer'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 col-lg-4  col-12 ft-1'>
                    <h4>Laundary</h4>
                    <p>Revolutionize Your Laundry Experience: Introducing Laundary, Where Clean Meets Convenience
                        <br />Elevate Your Everyday with laundary- Simplifying Laundry, Redefining Cleanliness. </p>
                </div>
                <div className='col-md-6 col-lg-2  col-12 ft-2'>
                    <h5>Quick Links</h5>
                    <ul>
                        <li className="nav-item">
                            <a href="/" className="nav-link">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div className='col-md-6 col-lg-3  col-12 ft-3'>
                    <h5>Follow Urbangears</h5>
                    <div className='footer-icons'>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-x-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-youtube"></i>
                    </div>
                </div>
                <div className='col-md-6 col-lg-3  col-12 ft-4'>
                    <h5>Contact Info</h5>
                    <div className='contact'>
                        <p><i class="fa-solid fa-phone-volume"></i>+91 8888664803</p>
                        <p><i class="fa-solid fa-envelope"></i>kirandj@gmail.com</p>
                        <p><i class="fa-solid fa-paper-plane"></i>Nashik, Maharashtra, India.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='footer-wrap'>
            <p>
                Copyright Laundary, All rights reserved.
            </p>
        </div>
    </div>
  );
}