import React from "react";
import './cardealer.css'
import insta from './insta.png'
import tele from './tele.jpg'
import x from './x.png'
import loc  from './location.png'
import call from './call.jpg'
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Fotter()
{
    return(
        <nav className="allfotter">

        <nav className="socialmedias">
        <h1>follow us on</h1>
          <a href="http://www.instagram.com/bebaw.t">  <i className="fab fa-instagram"></i>/</a>
        
          <a href="http://t.me/abi">  <i className="fab fa-telegram-plane"></i>/</a>
         
          <a href="http://www.x.com/bbaba">  <i className="fab fa-twitter"></i>/</a>
        </nav>
        <nav className="locations"> 
        <i className="fas fa-map-marker-alt"></i> 
<a 
                            className="contact-item map-link" 
                            href="https://www.google.com/maps?q=belay ab moters" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                           adissababa,bole
                        </a>
        </nav>
        <nav className="phonenumber">
        <i className="fas fa-phone"></i> 
        
        <a 
                            className="contact-item" 
                            href="tel:+251967125836"
                        >
                             0967125826
                        </a>

                        <a 
                            className="contact-item" 
                            href="tel:+251707328392"
                        >
                             0707328392
                        </a>
                        </nav>
        </nav>
    
    )
}