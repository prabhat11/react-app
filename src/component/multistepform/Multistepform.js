 import React from 'react';
 
 export default function Multistepform() {
   return (
<div className="container d-flex justify-content-center" style="min-width:720px!important">
  <div className="col-11 col-offset-2">
    <div className="progress mt-3" style="height: 30px;">
      <div className="progress-bar progress-bar-striped progress-bar-animated" style="font-weight:bold; font-size:15px;" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <div className="card mt-3">
      <div className="card-header font-weight-bold">My Bootstrap 5 multi-step-form</div>
      <div className="card-body p-4 step">
        <div className="radio-group row justify-content-between px-3 text-center" style="justify-content:center !important">
          <div className="col-auto me-sm-2 mx-1 card-block py-0 text-center radio">
            <div className="opt-icon"><i className="fas fa-user-plus" style="font-size: 80px; margin-left: 25px;"></i></div>
            <p><b>Add new user</b></p>
          </div>
          <div id="suser" className="selected col-auto ms-sm-2 mx-1 card-block py-0 text-center radio">
            <div className="opt-icon"><i className="fas fa-users" style="font-size: 80px;"></i></div>
            <p><b>Search existing user</b></p>
          </div>
        </div>
        <div className="searchfield text-center pb-1" style="font-size:12px">Search for example <b>Gary Hendren</b></div>
        <div className="searchfield input-group px-5">
          <span className="input-group-text" id="basic-addon1"><i className="fas fa-search text-white" aria-hidden="true"></i></span>
          <input id="txt-search" className="form-control" type="text" placeholder="Search" aria-label="Search"/>
        </div>
        <div id="filter-records" className="mx-5"></div>
      </div>
      <div id="userinfo" className="card-body p-4 step" style="display: none">
        <div className="text-center">
          <h5 className="card-title font-weight-bold pb-2">User information</h5>
        </div>

        <div className="form-group row">
          <div className="col-2"></div>
          <div className="col-4">
            <label for="fname">First Name<b style="color: #dc3545;">*</b></label>
            <input type="text" name="name" className="form-control" id="fname" required/>
            <div className="invalid-feedback">This field is required</div>
          </div>
          <div className="col-4">
            <label for="lname">Last Name<b style="color: #dc3545;">*</b></label>
            <input type="text" className="form-control" id="lname" required/>
            <div className="invalid-feedback">This field is required</div>
          </div>
        </div>
        <div className="form-group row pt-2">
          <label for="team" className="col-2 text-end control-label col-form-label">Team</label>
          <div className="col-8">
            <input type="text" className="form-control" id="team"/>
          </div>
        </div>
        <div className="form-group row pt-2">
          <label for="address" className="col-2 text-end control-label col-form-label">Address</label>
          <div className="col-8">
            <input type="text" className="form-control" id="address"/>
          </div>
        </div>
        <div className="form-group row pt-2">
          <label for="tel" className="col-2 text-end control-label col-form-label">Tel/Gsm</label>
          <div className="col-8">
            <input type="text" className="form-control" id="tel"/>
          </div>
        </div>
        <div className="text-center text-muted"><b style="color: #dc3545;">*</b> required fields</div>
      </div>
      <div className="card-body p-5 step" style="display: none">Step 3</div>
      <div className="card-body p-5 step" style="display: none">Step 4</div>
      <div className="card-body p-5 step" style="display: none">Step 5</div>
      <div className="card-footer">
        <button className="action back btn btn-sm btn-outline-warning" style="display: none">Back</button>
        <button className="action next btn btn-sm btn-outline-secondary float-end" disabled="">Next</button>
        <button className="action submit btn btn-sm btn-outline-success float-end" style="display: none">Submit</button>
      </div>
    </div>

  </div>
</div>
     
   );
 }
 