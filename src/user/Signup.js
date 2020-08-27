import React, { useState } from "react";
import { Link } from "react-router-dom";
import Base from "../core/Base";
import {signup} from '../auth/helper'

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    success: false,
    error: "",
  });
  const { name, email, password, success, error } = values;
  const handleChange = (component) => (event) => {
    setValues({ ...values, error: false, [component]: event.target.value });
  };
  
  const signUpForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label className="text-light">Name</label>
              <input className="form-control" onChange={handleChange('name')} type="text" />
            </div>
            <div className="form-group">
              <label className="text-light">Email</label>
              <input className="form-control" onChange={handleChange('email')} type="email" />
            </div>

            <div className="form-group">
              <label className="text-light">Password</label>
              <input className="form-control" onChange={handleChange('password')} type="password" />
            </div>
            <button className="btn btn-success btn-block" onClick={onSubmit}>Submit</button>
          </form>
        </div>
      </div>
    );
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false })
    signup({
      name,
      email,
      password
    })
      .then((data) => {
        if (data?.error) {
          setValues({ ...values, error: data?.error, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            password: "",
            email: "",
            error: "",
            success: true,
          });
        }
      })
      .catch(err=>console.log(err));
  };
const onSuccess=()=>{
   return( <div className='alert alert-success text-dark text-center' style={{display : success ? "":"none"}}>
         Sign Up Successfull <Link to='/signin'>Login Here</Link>
    </div>);
}
const onFailure=()=>{
    return(<div className='alert alert-danger' style={{display : error ? "":"none"}}>
      {error}
    </div>);
}

  return (
    <Base title="Sign Up" description="Register Here">
        {onSuccess()},
        {onFailure()},
      {signUpForm()}
      <p className="text-center text-white">{JSON.stringify(values)}</p>
    </Base>
  );
};


export default Signup;