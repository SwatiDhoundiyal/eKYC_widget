import React from 'react';
import { Link } from "react-router-dom";
import './Home.css'

export const Header = () => {

    return (
        
        <div>
            
            <div className="nav-container">
            <div className="wrapper">
            <nav>
                <div className="logo">
                eKYC
                </div>

                <ul className="nav-items">
                <li>
                    <Link to="#">Home</Link>
                </li>

                <li>
                    <Link to="#">About us</Link>
                </li>

                <li>
                    <Link to="#">Services</Link>
                </li>

                <li>
                    <Link to="#">Contact</Link>

                </li>

                <li>
                    <Link className="nav-btn-container" to="#">
                    {<img className="search-btn" src="images/lock.svg" alt="" />
                    /*<img className="close-btn" src="images/lock.svg" alt="" /> */}
                    </Link>
                </li>
                </ul>
            </nav>
            </div>
            </div>



         
          <div class="header-container">
      <div class="wrapper">
        <header>
          <div class="hero-content">
            <h1> Identity Verification</h1>
            <p>
              Authenticate yourself and make your data more secure and credible.
            </p>
            <a href="#">
              Learn More
            </a>
          </div>

          <div class="hero-image">
            <img src="images/id-card.png" alt="" />
           <div class="photo-bg"></div>
          </div>
        </header>

        
      </div>
    </div>

        </div>
    )
}
