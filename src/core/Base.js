import React from "react";
import Navbar from "./navbar";

const Base = (
  //{
    // title = 'My Title',
    // desc='My Description',
    // className='bg-dark text-white p-4',
    // Children
    
//}
properties
) => {
  return (
    <div>
      <Navbar/>
      <div className="container-fluid">
        <div className="bg-dark text-white text-center">
          <h1 className="display-4">{properties.title}</h1>
          <p className="lead">{properties.description}</p>
        </div>
        <div className={properties.className}>
          {properties.children}
        </div>
      </div>

      <footer className="footer bg-dark mt-auto py-3">
        <div className="container-fluid bg-success text-white text-center">
          <h4>If you have any queries feel free to reach out!!!</h4>
          <button type="button" className="btn btn-warning">
            Contact Us
          </button>
        </div>
        <div className="container text-center">
          <span className="text-muted">
            An amazing store to find fashion stuff for developers!!
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Base;
