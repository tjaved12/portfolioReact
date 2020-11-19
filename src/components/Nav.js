import React from "react";
import {Link} from 'react-router-dom';
import Pdf from '../Tahmeena-Resume-2020.pdf';

function Nav() {
 

  return ( 
  
<div className="row no-gutters">
          <div className="col-lg-6 ">
            <div id="header" className="bold" role="banner" >
              <h1 id ="text">Tahmeena Javed</h1>
            </div>
          </div>  

       
      <div className="col-lg-6  d-flex justify-content-center text-center">
          <nav className="navbar navbar-expand-lg navbar-light"> 
<ul>
       <li className="nav-item">
       
         <Link className="nav-link" to='/'>About</Link>
        </li>
    
        <li className="nav-item">
         
          <Link className="nav-link" to='/portfolioReact/portfolio'>Portfolio</Link>
        </li>
      
        <li className="nav-item">
        
          <Link className="nav-link" to='/contact'>Contact</Link>
        </li>   
        <li className="nav-item">
          {/* <a className="nav-link" href="../portfolioNew/portfolio.html">Portfolio</a> */}
          <a  className="nav-link" href={Pdf} target='_blank'>Resume</a>
        </li>   
 </ul>
        </nav>        
         </div>  
 </div>
  
  );
}

export default Nav;