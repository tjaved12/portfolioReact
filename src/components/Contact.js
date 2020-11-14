import React from 'react'

export default function Contact() {
    return (
        <div>

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
  </div>
 
  <br></br>

<div className="row">
  <div className="col-lg-12"> 
  <div className= "footer" role="contentinfo">
    <h4>This page is created by Tahmeena Javed @2020</h4>
  </div>
  </div>
  </div>

</div>


        
    )
}
