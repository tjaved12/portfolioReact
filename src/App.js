import React, { useState, useEffect } from "react";
import PersonalInfo from "./components/Index";
import MoodBtns from "./components/MoodBtns";
import Nav from "./components/Nav";
import "./portfolio.css";

function App() {

return(

  <div className="container" id ="header">

    
      <div className="row no-gutters">
        <div className="col-lg-6 ">
          <div id="header" classNme="bold" role="banner" >
            <h1 id ="text">Tahmeena Javed</h1>
          </div>
        </div>  

   
    <div classNme="col-lg-6">
        <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
<ul>
     <li className="nav-item">
      <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">
       About</a>
      </li>
  
      <li className="nav-item">
        <a className="nav-link" href="../portfolioNew/contact.html">Contact Me</a>
      </li>
    
      <li className="nav-item">
        <a className="nav-link" href="../portfolioNew/portfolio.html">Portfolio</a>
      </li>   
</ul>
      </nav>        
       </div>  
  </div>
  


    <div className="row">
    <div className="col-lg-12">
      
   <h1>Introducing Myself</h1>
</div>


<div className="row">
 <div className="col-lg-12">

  <img src={"./images/portPic.png"} alt="MyImage" class="float-left" />                     
  
    <p>
    A certified QA Engineer, with 10 + years of experience in all phases of software development Life Cycle (SDLC).
     Profound automation scripting and manual testing experience, using traditional Waterfall and Iterative/Agile methodology. 
     Quick learner, self-starter and a team player with excellent verbal and written communication skills. 
     Extensive work experience; in Enterprise Risk Management (ERM), Trading, Capital Market and Investment Banking.
     Proficient in Functional, Integration, E2E, System, Accessibility, UAT and Performance testing of Client/Server and Web base applications. 
     Hands on experience with diverse testing tools like HP, ranging from account opening, Quality Center/ALM, Soap UI, Swagger, JIRA, Pivotal, QTP,
     Selenium Web driver, Bugzilla, JAWS, axe tool, JMeter and Load Runner. Trained in Organizational Psychology to create a comfortable and positive
     team environment to approach the issues objectively.
    </p>
    

  </div>
 <div className="card-deck">
  <div className="card">
    <img src={"https://www.roberthalf.com/sites/default/files/2020-05/skills-for-resume.jpg"} class="card-img-top" alt="...">
    <div className="card-body">
      <h5 className="card-title"></h5>
      <a href="./Tahmeena-Resume-2020.pdf" target="_blank">Resume</a>
    </div>
  </div>
  <div clasName="card">
    <img src="https://media.wired.com/photos/592681fc8d4ebc5ab806a856/2:1/w_2500,c_limit/LinkedIn_HP.jpg" class="card-img-top" alt="...">
    <div className="card-body">
      <h5 className="card-title"></h5>
      <a href="https://www.linkedin.com/in/tahmeena-j/" target="_blank">LinkedIn</a> 
    </div>
  </div>
  <div className="card">
  <img src={window.location.origin + '/img/myImage.png'} />
    <img src={'https://ucarecdn.com/e1a6a747-b8b4-4dd0-b662-27fecfcfc060/'}class="card-img-top" alt="...">
    <div className="card-body"/>
      <h5 className="card-title"></h5>
      <a href="https://github.com/tjaved12" target="_blank">Github</a> 

    </div>
  </div>
</div>
</div>
</div>



       
       </div>
      </div>



<div className="row">
<div className="col-lg-12"> 
<div className= "footer" role="contentinfo">
<h4>This page is created by Tahmeena Javed @2020</h4>
</div>
</div>
</div>

</div>
)

export default App;
