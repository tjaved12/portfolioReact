import React, {useState} from 'react'
import {Link} from 'react-router-dom'
//import Pdf from './Tahmeena-Resume-2020.pdf'
//import {Document, Page} from 'react-pdf'

export default function About() {

  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);

  // function onDocumentLoadSuccess({numPages}) {
  //   setNumPages(numPages)
  // }
    return (
     <div>

     <div className="row">
      <div className="col-lg-12">
</div>
</div>

      <div className="row">
      <div className="col-lg-12">
       <h1>Introducing Myself</h1>
       </div>
 </div>


  <div className="row">
   <div className="col-lg-12">
     <img src="https://media-exp1.licdn.com/dms/image/C4E03AQF_MRGWxfiKMA/profile-displayphoto-shrink_400_400/0?e=1610582400&v=beta&t=MADfkpjK0tBa1cxcf5lcoDSAikl1AIdTA33o7tp0GvU" alt="MyImage" className="float-left" alt="..."></img>                    
          <p>
      A certified QA Engineer, with 10 + years of experience in all phases of software development Life Cycle (SDLC).
       Profound automation scripting and manual testing experience, using traditional Waterfall and Iterative/Agile methodology. 
       Quick learner, self-starter and a team player with excellent verbal and written communication skills. 
       Extensive work experience; in Enterprise Risk Management (ERM), Trading, Capital Market and Investment Banking.
       Proficient in Functional, Integration, E2E, System, Accessibility, UAT and Performance testing of Client/Server and Web base applications. 
       Hands on experience with diverse testing tools like HP, ranging from account opening, Quality Center/ALM, Soap UI, Swagger, JIRA, Pivotal, QTP,
       Selenium Web driver, Bugzilla, JAWS, axe tool, JMeter and Load Runner. Trained in Organizational Psychology to create a comfortable and positive
       team environment to approach the issues objectively.At present I am working as Sr Engineer, Quality Assurance for TDAx (Responsive web) project. 
      </p>
         </div>
</div>
<br></br>

   <div className="card-deck">

   <div className="card">
           <img src="https://www.pngkey.com/png/full/892-8928473_document-logo-rsum.png" className="card-img-top" alt="..."></img> 
              <div className="card-body">
     <h5 className="card-title"></h5>
        <a href='https://tjaved12.github.io/portfolioNew/Tahmeena-Resume-2020.pdf' target="_blank">Resume</a> 
        {/* <Document file="./Tahmeena-Resume-2020.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        > */}

{/* <Page pageNumber={pageNumber} />
         
        </Document> */}
  </div>
     </div>


<div className="card">
      <img src="https://www.pngkit.com/png/full/14-145502_linkedin-color-icon-linkedin-logo-round-png.png" className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title"></h5>
        <a href="https://www.linkedin.com/in/tahmeena-j/" target="_blank">LinkedIn</a> 
      </div>
    </div>

    <div className="card">
      <img src="https://ucarecdn.com/e1a6a747-b8b4-4dd0-b662-27fecfcfc060/" className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title"></h5>
        <a href="https://github.com/tjaved12" target="_blank">Github</a> 

      </div>
    </div>
  </div>
<br></br><br></br>
  <div className="row">
<div className="col-lg-12"> 
<div className= "footer" role="contentinfo">
  <h4>This page is created by Tahmeena Javed @2020</h4>
</div>
</div>
</div>
 </div>



         
      

    )}

