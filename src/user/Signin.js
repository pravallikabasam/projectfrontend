import React, { useState } from "react";
import { Link } from "react-router-dom";
import Base from "../core/Base";

const Signin = () => {
  const signInForm = ()=>{
    return(
<div className='row'>
    <div className='col-md-6 offset-sm-3 text-left'>
        <form>
        <div class="form-group">
        <label className='text-light'>Email : </label>
             <input type="text" class="form-control" placeholder="Email"/>
        </div>
        <div class="form-group">
        <label className='text-light'>Password : </label>
             <input type="text" class="form-control" placeholder="Password"/>
        </div>
        <button class="btn btn-primary btn-block">Sign In</button>
        </form>
    </div>
</div>
    );
}
  return (
    <Base title="Sign In" description="Are you an existing customer??">
      {signInForm()}
    </Base>
  );
};

export default Signin;
