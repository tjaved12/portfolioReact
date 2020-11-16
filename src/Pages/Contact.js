import React from 'react'

export default function Contact() {
    return (
        <div className= "container">
<br></br>
           <div className="row no-gutters">

        <div className="col-lg-6"> 
             <form id="contact">

  <div className="form-group">
       <h2>Contact</h2>
                
        <label for="exampleInputEmail1">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>

  <div className="form-group">
    <label for="exampleInputPassword1">Name</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>

  <div className="input-group">
    <div className="input-group-prepend">
      <span className="input-group-text">Enter message </span>
    </div>
    <textarea className="form-control" aria-label="With textarea"></textarea>
    </div>

<br></br>
    <button type="submit" class="btn btn-outline-secondary my-2 my-sm-0" >Submit</button>
    </form>
    </div>

    <div className="col-lg-6"> 
<div className="card">
      <img src="https://banner2.cleanpng.com/20171220/jsq/gmail-logo-png-5a3a2279bc46b8.84677147151375935377123510.jpg" className="card-img-top" alt="..."></img>
      <div className="card-body">
        </div>
        </div>
        <div>
          <br></br>
        <h3 className="card-title"></h3>
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank">Compose an Email </a> 
      </div>
    
    </div>

  </div>
 
  <br></br>



</div>


        
    )
}
