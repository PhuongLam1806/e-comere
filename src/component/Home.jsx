import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card text-bg-dark border-radius=0">
        <img src="/assets/bg.jpg" className="card-img" alt="background" height="550px"/>
        <div className="card-img-overlay d-flex flex-column mt-4">
            <div className="container">
          <h5 className="card-title fw-bolder mb-0 display-3">NEW SEASON ARRIVALS</h5>
          <p className="card-text lead fs-2">
            CHECK OUT ALL THE TRENDS
          </p>
            </div>
        </div>
      </div>
      <Products/>
    </div>
  );
};

export default Home;
