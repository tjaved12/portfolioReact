import React from "react";
import {Link} from 'react-router-dom'

function Nav() {
 

  return ( 
  
<div className="row no-gutters">
          <div className="col-lg-6 ">
            <div id="header" className="bold" role="banner" >
              <h1 id ="text">Tahmeena Javed</h1>
            </div>
          </div>  

       
      <div className="col-lg-6">
          <nav className="navbar navbar-expand-lg navbar-light"> 
<ul>
       <li className="nav-item">
        {/* <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">
         About</a> */}
         <Link className="nav-link" to='/'>About</Link>
        </li>
    
        <li className="nav-item">
          {/* <a className="nav-link" href="../portfolioNew/contact.html">Contact Me</a> */}
          <Link className="nav-link" to='/portfolio'>Portfolio</Link>
        </li>
      
        <li className="nav-item">
          {/* <a className="nav-link" href="../portfolioNew/portfolio.html">Portfolio</a> */}
          <Link className="nav-link" to='/contact'>Contact</Link>
        </li>   
 </ul>
        </nav>        
         </div>  
 </div>
  
  );
}

export default Nav;