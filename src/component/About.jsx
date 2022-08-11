import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
      <div>
        <div className="container py-5 my-5">
          <div className="row" >
            <div className="col-md-6">
              <h1 className="text-primary fw-bold mb-4">About US</h1>
              <p className="lead mb-4">
                This is my first product using the framework and it's still
                flawed. I will complete the page in the most complete way in the
                near future
              </p>
              <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact US</NavLink>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
                <img src="/assets/about.png" width="400px" height="400px"/>
            </div>
          </div>
        </div>
      </div>
    );
}

export default About;
